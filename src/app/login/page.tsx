"use client";

import { useState } from "react";
import { loginUser } from "../actions/loginAction";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginUser = async () => {
    await loginUser(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center">
      <form
        action={handleLoginUser}
        className="w-96 mt-5 p-5 flex flex-col gap-3 bg-gray-100 rounded-lg"
      >
        <h2 className="font-bold text-center text-2xl uppercase">login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
