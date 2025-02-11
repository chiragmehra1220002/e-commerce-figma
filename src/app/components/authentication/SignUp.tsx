"use client";
import Image from "next/image";
import appwriteService, { checkActiveSession } from "@/app/appwrite/config";
import { deleteSessions } from "@/app/appwrite/config";
import useAuth from "@/app/context/useAuth";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { loginWithGoogle, logoutUser, getUser } from '@/app/appwrite/auth'

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    firstname: "",
    lastname: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setAuthStatus } = useAuth();

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  useEffect(() => {
    const checkSession = async () => {
      const isLoggedIn = await checkActiveSession();
      if (isLoggedIn) {
        router.push("/Login"); 
      }
    };
    checkSession();
  }, [router]);

 
  const create = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Password strength validation (example regex)
    const passwordStrengthValid = formData.password.match(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
    );
    if (!passwordStrengthValid) {
      setError("Password must be at least 8 characters long and include both letters and numbers.");
      return;
    }

    setLoading(true);
    try {
      const userData = await appwriteService.createUserAccount(formData);
      if (userData) {
        setAuthStatus(true);
        deleteSessions();
        router.push("/Login");
      }
    } catch (error: any) {
      if (error.message.includes("Email already exists")) {
        setError("This email is already in use. Please try a different one.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex top-[123px] w-[1000px] border border-[#DBDBDB] mt-[100px] ml-[100px] mr-[100px]">
        <Image src="/authentication/girlImage.svg" height={600} width={400} alt="signup" />
        <div className="flex flex-col">
          <div className="volkhov-regular text-[30px] font-[400] ml-[100px]">FASCO</div>
          <form className="max-w-md flex flex-col" onSubmit={create}>
            <div className="volkhov-regular text-[15px] font-[400] ml-[100px] mt-[20px]">
              Create Account
            </div>
            {/* Social Login Buttons */}
            <div className="flex form gap-[40px] mt-[10px]">
              <button className="w-[294px] h-[35px] border border-[#5B86E5] ml-[100px] poppins-thin text-[10px] font-[400] flex gap-[5px] items-center px-2 rounded-[5px] block" onClick={loginWithGoogle}>
                <Image src="/authentication/google.svg" height={20} width={20} alt="signup"  />
                Sign Up With Google
              </button>
              <button className="w-[294px] h-[35px] border border-[#5B86E5] poppins-thin text-[10px] font-[400] flex gap-[5px] items-center px-2 rounded-[5px] block">
                <Image src="/authentication/facebook.png" height={20} width={20} alt="signup" />
                Sign Up With Facebook
              </button>
            </div>
            <div className="flex gap-[2px] ml-[250px] mt-[30px]">
              <div className="poppins-thin text-[20px] font-[700] text-[#838383] mb-[2px] mt-[-10px]">OR</div>
            </div>
            {/* Form Fields */}
            <div className="flex gap-[30px] ml-[20px]">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2  border-[#9D9D9D]"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2 border-[#9D9D9D]"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex gap-[30px] ml-[20px] mt-[20px]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2  border-[#9D9D9D]"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2 border-[#9D9D9D]"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="flex gap-[30px] ml-[20px] mt-[20px]">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2  border-[#9D9D9D]"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline poppins-thin font-[400] border-b-2 border-[#9D9D9D]"
                placeholder="Confirm Password"
                required
              />
            </div>
        
            <button 
              type="submit" 
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 poppins-thin1 font-medium rounded-lg text-xs text-white w-[307px] h-[45px] py-4 ml-[100px] mt-[20px]"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
    
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            
            {loading && <div className="loading-spinner">Loading...</div>}
            <div className="poppins-thin text-[16px] mt-[20px] flex justify-center">
              Already have an Account? <Link href="/Login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
