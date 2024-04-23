"use server";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";

export const logoutUser = async () => {
  signOut(auth);
  redirect("/login");
};
