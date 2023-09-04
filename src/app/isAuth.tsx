"use client";

import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Loading from "./loading";

interface IsAuthProps {
  children: React.ReactNode
}

const IsAuth = ({ children }: IsAuthProps) => {
  const router = useRouter();
  const { data: session, status } = useSession()

  switch (status) {
    case "unauthenticated":
      router.replace('/auth/login')
      break;

    case "authenticated":
      return (
        <>
          {children}
        </>
      )
    default:
      return (
        <Loading />
      )
  }

}

export default IsAuth;
