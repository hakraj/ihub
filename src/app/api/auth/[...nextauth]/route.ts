import NextAuth from "next-auth";
import Email from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../../../lib/mongodb/client"


const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise, {}),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 30000
      }
    }),
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth/login/",
    signOut: "/auth/login/",
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify/', // (used for check email message)
    newUser: '/auth/onboarding/'
  }

})

export { handler as GET, handler as POST }