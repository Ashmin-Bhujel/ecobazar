"use client";

import { EyeOpen } from "@/assets/icons";
import Button from "@/components/Button";
import Default from "@/components/Layouts/Default";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Default>
      <section className="py-20 flex items-center justify-center">
        <div className="flex flex-col gap-5 p-6 pb-8 border border-gray-50 text-sm text-gray-600">
          <div>
            <h1 className="text-h5 font-600 text-gray-900 text-center">
              Sign In
            </h1>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                name="user-email"
                id="user-email"
                placeholder="Email"
                className="px-4 py-3 border border-gray-100 text-md"
              />
              <div className="flex items-center gap-2 pr-4 border border-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-gray-900">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="pl-4 py-3 text-md outline-none"
                />
                <EyeOpen
                  onClick={() => {
                    setShowPassword((currentState) => !currentState);
                  }}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-x-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p>Forget Password</p>
            </div>
          </div>
          <div>
            <Button className="w-full">Login</Button>
          </div>

          <div className="text-center">
            <p>
              <span>Don&lsquo;t have account? </span>
              <Link href="/signup" className="text-gray-900 font-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Default>
  );
}
