"use client";
import { signOut, useSession } from "next-auth/react";
import LoadingSkeleton from "@/components/skeletonLoading";
import Login from "@/components/view/login";
export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <LoadingSkeleton />;
  } else if (session) {
    return (
      <div className="fixed  max-w-md p-6 bg-white ">
        <p className="text-3xl font-semibold text-gray-800 mb-2">
          Welcome, <span className="text-indigo-600">{session.user?.name}</span>
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Signed in as{" "}
          <span className="font-medium">{session.user?.email}</span>
        </p>
        <button
          className="w-30  bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return <Login />;
  }
}
