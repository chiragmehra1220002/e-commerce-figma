"use client"
import React from 'react'
import LoginPage from '../components/authentication/LoginPage'
import { useRouter } from "next/navigation";
import useAuth from "@/app/context/useAuth";

const page = () => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
      router.replace("/");
      return <></>;
  }

  return(
      <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <LoginPage />
      </section>
  )
}

export default page