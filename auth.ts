import { customFetch } from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { ProxyAgent, fetch as undiciFetch } from "undici";

const authProxy =
  process.env.AUTH_PROXY ??
  process.env.HTTPS_PROXY ??
  process.env.HTTP_PROXY ??
  process.env.ALL_PROXY;

const proxyAgent = authProxy ? new ProxyAgent(authProxy) : undefined;

const authFetch: typeof fetch | undefined = proxyAgent
  ? (((
      input: Parameters<typeof undiciFetch>[0],
      init?: Parameters<typeof undiciFetch>[1],
    ) =>
      undiciFetch(input, {
        ...init,
        dispatcher: proxyAgent,
      } as Parameters<typeof undiciFetch>[1])) as unknown as typeof fetch)
  : undefined;

const providerFetch = authFetch ? { [customFetch]: authFetch } : {};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID ?? process.env.GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? process.env.GITHUB_SECRET,
      ...providerFetch,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID ?? process.env.GOOGLE_CLIENT_ID,
      clientSecret:
        process.env.AUTH_GOOGLE_SECRET ?? process.env.GOOGLE_CLIENT_SECRET,
      issuer: "https://accounts.google.com",
      jwks_endpoint: "https://www.googleapis.com/oauth2/v3/certs",
      authorization: {
        url: "https://accounts.google.com/o/oauth2/v2/auth",
        params: {
          scope: "openid email profile",
        },
      },
      token: "https://oauth2.googleapis.com/token",
      userinfo: "https://openidconnect.googleapis.com/v1/userinfo",
      ...providerFetch,
    }),
  ],
});
