"use server";

import { adminAuth, database } from "@/lib/firebase";
import { ref, update } from "firebase/database";

export const deleteAcc = async (userUid: string) => {
  const userRef = ref(database, `users`);
  try {
      await adminAuth.deleteUser(userUid);
      await update(userRef, { [userUid]: null });
  } catch (error) {
      console.error("Ошибка при удалении пользователя:", error);
  }
};
