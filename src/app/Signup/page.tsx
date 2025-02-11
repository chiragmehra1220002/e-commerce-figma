"use client"
import SignUp from "../components/authentication/SignUp"
import  React from "react"
import useAuth from "@/app/context/useAuth";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
      router.replace("/");
      return <></>;
  }
  return (
    <div>
        <SignUp/>
    </div>
  )
}

export default Page;



