"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const session = authClient.getSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSignIn = async () => {
    try {
      authClient.signUp.email(
        {
          email,
          password,
          name,
        },
        {
          onSuccess: () => {
            setIsSuccess(true);
          },
          onError: (error: any) => {
            setError(error.message);
          },
        }
      );
    } catch (error: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
