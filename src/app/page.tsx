"use client";

import { useState } from "react";
import { registerUser } from "./actions/registerActions";

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterUser = async () => {
    try {
      await registerUser(username, email, password);
      alert(
        "Регистрация прошла успешно. Пожалуйста, проверьте свою почту для подтверждения адреса."
      );
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(`Ошибка регистрации: ${error.message}`)
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        action={handleRegisterUser}
        className="w-96 mt-5 p-5 flex flex-col gap-3 bg-gray-100 rounded-lg"
      >
        <h2 className="font-bold text-center text-2xl uppercase">
          registration
        </h2>
        <input
          value={username}
          className="border p-1 rounded-md"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          value={email}
          className="border p-1 rounded-md"
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          className="border p-1 rounded-md"
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="p-1 rounded-md bg-blue-400 hover:bg-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  );
}
