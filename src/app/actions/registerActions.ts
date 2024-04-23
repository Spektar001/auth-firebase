"use server";

import { auth, database } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ref, set } from "firebase/database";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  const actionCodeSettings = {
    url: `http://localhost:3000/login`,
  };

  sendEmailVerification(auth.currentUser!, actionCodeSettings);
  await set(ref(database, "users/" + user.uid), {
    username: username,
    email: email,
    password: password,
    emailVerified: false,
  });
};
