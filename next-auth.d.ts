import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;  // Add the id field for the GitHub user
    } & DefaultSession["user"];
  }
}
