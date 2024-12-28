import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      }),
      
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/dashboard`;
    },
  },
  debug: true,
};

const auth = NextAuth(authOptions);

// Export handlers explicitly if necessary
export const handlers = {
  GET: auth.GET,
  POST: auth.POST,
};

export default auth;