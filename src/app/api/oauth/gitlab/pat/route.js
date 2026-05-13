import { NextResponse } from "next/server";
import { createProviderConnection } from "@/models";

const GITLAB_DEFAULT_BASE = "https://gitlab.com";

function validateUrl(url) {
  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("Invalid protocol");
    }
    const hostname = parsed.hostname;
    if (/^(localhost|127\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.)/.test(hostname)) {
      throw new Error("Private addresses not allowed");
    }
    return parsed;
  } catch (e) {
    throw new Error(`Invalid URL: ${e.message}`);
  }
}

/**
 * POST /api/oauth/gitlab/pat
 * Authenticate GitLab Duo with a Personal Access Token (PAT)
 */
export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { token, baseUrl } = body;
    if (!token?.trim()) {
      return NextResponse.json({ error: "Personal Access Token is required" }, { status: 400 });
    }

    const base = validateUrl(baseUrl?.trim() || GITLAB_DEFAULT_BASE).href.replace(/\/$/, "");

    // Verify token by fetching current user
    const userRes = await fetch(`${base}/api/v4/user`, {
      headers: { "Private-Token": token.trim(), Accept: "application/json" },
    });

    if (!userRes.ok) {
      const err = await userRes.text();
      return NextResponse.json({ error: `GitLab token verification failed: ${err}` }, { status: 401 });
    }

    const user = await userRes.json();
    const email = user.email || user.public_email || "";

    await createProviderConnection({
      provider: "gitlab",
      authType: "oauth",
      accessToken: token.trim(),
      refreshToken: null,
      expiresAt: null,
      email,
      displayName: user.name || user.username || email,
      testStatus: "active",
      providerSpecificData: {
        username: user.username || "",
        email,
        name: user.name || "",
        baseUrl: base,
        authKind: "personal_access_token",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("GitLab PAT auth error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
