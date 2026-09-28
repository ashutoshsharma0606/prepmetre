import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const runtime = "nodejs"; // Force Node.js environment on Vercel

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_key_prepmetre_2026_secure",
  debug: true, // This forces NextAuth to log errors cleanly to your Vercel logs instead of a cryptic 500
});

export { handler as GET, handler as POST };