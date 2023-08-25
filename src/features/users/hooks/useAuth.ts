"use client"

import { useState ,useCallback } from "react";
import { useRouter } from 'next/navigation'

import { getUser } from "../api/getUser"
import { useMessage } from "./useMessage"
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const router = useRouter();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    getUser(id).then((user) => {
      if (user) {
        setLoginUser(user);
        showMessage({ title: "Login succeeded", status: "success" });
        router.push("/");
      } else {
        showMessage({ title: "User not found", status: "error" });
      }
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return { login, loading };
}