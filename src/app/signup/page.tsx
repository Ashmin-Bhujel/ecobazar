"use client";

import { EyeOpen } from "@/assets/icons";
import Button from "@/components/Button";
import Default from "@/components/Layouts/Default";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  return (
    <Default>
      <section className="py-20 flex items-center justify-center">
        <div className="flex flex-col gap-5 p-6 pb-8 border border-gray-50 text-sm text-gray-600">
          <div>
            <h1 className="text-h5 font-600 text-gray-900 text-center">
              Create Account
            </h1>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <input
                type="text"
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
              <div className="flex items-center gap-2 pr-4 border border-gray-100 focus-within:outline focus-within:outline-2 focus-within:outline-gray-900">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="pl-4 py-3 text-md outline-none"
                />
                <EyeOpen
                  onClick={() => {
                    setShowConfirmPassword((currentState) => !currentState);
                  }}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-x-2">
                <input type="checkbox" name="accept" id="accept" />
                <label htmlFor="accept">Accept all terms & conditions</label>
              </div>
            </div>
          </div>
          <div>
            <Button className="w-full">Create Account</Button>
          </div>

          <div className="text-center">
            <p>
              <span>Already have account </span>
              <Link
                href="/signin"
                className="text-gray-900 font-500 hover:text-primary"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Default>
  );
}
