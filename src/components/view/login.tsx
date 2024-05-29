"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import LoadingSkeleton from "@/components/skeletonLoading";
import TextRotator from "../ui/textRotater";
import { Button } from "../ui/button";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingSkeleton />;
  }

  if (session) {
    return (
      <div className="flex top-4 right-4 max-w-md p-6 bg-white rounded-lg shadow-lg">
        <p className="text-xl font-semibold text-gray-800 mb-2">
          Welcome, <span className="text-green-600">{session.user?.name}</span>
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Signed in as{" "}
          <span className="font-medium">{session.user?.email}</span>
        </p>
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-2xl mb-4">
        <TextRotator />
      </p>
      <main className="flex flex-col space-y-4">
        <Button
          className="w-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-white font-semibold py-2 px-4 rounded-md "
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </Button>
        <Button
          className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold py-2 px-4 rounded-md"
          onClick={() => signIn("github")}
        >
          Sign in with Github
        </Button>
      </main>
    </div>
  );
};

export default Login;
