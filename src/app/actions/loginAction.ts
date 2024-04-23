"use server";

import { auth, database } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, update } from "firebase/database";
import { redirect } from "next/navigation";

export const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  const dt = new Date();
  if (user.emailVerified) {
    update(ref(database, "users/" + user.uid), {
      last_login: dt,
      emailVerified: true,
    });
    redirect(`/user/${user.uid}`);
  } else {
    console.log("Подтвердите свой адрес эл почты, прежде чем войти.");
  }
};
