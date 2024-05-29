import { authOptions } from "@/utils/next.auth.options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Login from "@/components/view/login";
import React from "react";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/");
  }
  return <Login />;
};

export default LoginPage;
