"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import {account,OAuthProvider} from '@/app/appwrite/config';
import appwriteService from "@/app/appwrite/config";
import useAuth from "@/app/context/useAuth";
import { useRouter } from "next/navigation";
import { checkActiveSession, deleteSessions } from "@/app/appwrite/config";
import Link from "next/link";
import { loginWithGoogle, logoutUser, getUser } from '@/app/appwrite/auth'

const LoginPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeSession, setActiveSession] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    setIsClient(true);

   
    checkActiveSession();
  }, []);

  // Handle login
  async function handleGoogleLogin() {
    account.createOAuth2Session(OAuthProvider.Google,
      'http://localhost:3000',
      'http://localhost:3000/',
    )
  }
  async function handleFacebookLogin(){
    account.createOAuth2Session(OAuthProvider.Facebook,
      'http://localhost:3000',
      'http://localhost:3000/',
    )
  }
  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const session = await appwriteService.login(formData); // Login user
      if (session) {
        setAuthStatus(true);
        deleteSessions();
        router.push("/"); // Redirect to home after successful login
      }
    } catch (error: any) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const logout = async () => {
    try {
      await appwriteService.logout();
      setAuthStatus(false);
      setActiveSession(null); 
      router.push("/"); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-[1000px] ml-[100px] mt-[50px] mb-[40px] border border-[#DBDBDB] flex">
      <Image src="/authentication/signin.png" height={500} width={500} alt="signin" />
      <div className="flex flex-col">
        <div className="volkhov-regular text-[40px] font-[400] ml-[100px] mt-[30px]">FASCO</div>
        <div className="volkhov-regular text-[20px] font-[400] ml-[100px] mt-[10px]">Sign In To Fasco</div>
        
        {activeSession ? (
          // If there's an active session, show logout button
          <div className="flex flex-col items-center">
            <h2 className="text-xl">You are already logged in</h2>
            <button
              onClick={logout}
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 poppins-thin1 font-medium rounded-lg text-xs text-white w-[307px] h-[45px] py-4 ml-[100px] mt-[20px]"
            >
              Logout
            </button>
          </div>
        ) : (
          <form className="max-w-md flex flex-col" onSubmit={login}>
            <div className="flex form gap-[40px] mt-[10px]">
              <button type="button" className="w-[294px] h-[35px] border border-[#5B86E5] ml-[100px] poppins-thin text-[10px] font-[400] flex gap-[5px] items-center px-2 rounded-[5px] block" onClick={handleGoogleLogin}>
                <Image src="/authentication/google.svg" height={20} width={20} alt="google" />
                Sign Up With Google
              </button>
              <button type="button" className="w-[294px] h-[35px] border border-[#5B86E5] poppins-thin text-[10px] font-[400] flex gap-[5px] items-center px-2 rounded-[5px] block" onClick={handleFacebookLogin}>
                <Image src="/authentication/facebook.png" height={20} width={20} alt="facebook" />
                Sign Up With Facebook
              </button>
            </div>

            <div className="flex gap-[2px] ml-[250px] mt-[30px]">
              <div className="poppins-thin text-[20px] font-[700] text-[#838383] mb-[2px] mt-[-10px]">OR</div>
            </div>

            <div className="flex flex-col gap-[30px] ml-[100px] mt-[20px]">
              <input
                type="email"
                name="email"
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2 border-[#9D9D9D] w-[320px]"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              />
              <input
                type="password"
                name="password"
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2 border-[#9D9D9D] w-[320px]"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <button 
              type="submit" 
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 poppins-thin1 font-medium rounded-lg text-xs text-white w-[307px] h-[45px] py-4 ml-[100px] mt-[20px]"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Sign in"}
            </button>

            <button 
              type="button" 
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 poppins-thin1 font-medium rounded-lg text-xs text-white w-[307px] h-[45px] py-4 ml-[100px] mt-[20px]"
            >
              <Link href="/Signup">Register Now</Link>
            </button>

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <div className="poppins-thin1 font-[700] text-black ml-[100px] mt-[20px]">
              <Link href="/reset-password">Forget Password?</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
