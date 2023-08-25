"use client"

import { useState, useCallback } from "react";
import { useMessage } from "./useMessage"

import { User } from "../../../types/api/user";
import { getAllUser } from "../api/getAllUser"

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[] | null>(null); // User[] | null の型を指定

  const getUsers = useCallback(() => {
    setLoading(true);

    getAllUser().then((users) => {
      if (users) {
        setUsers(users);
      } else {
        showMessage({ title: "User not found", status: "error" });
      }
      return { users, getUsers, loading };
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  // users, getUsers, loading を返す
  return { users, getUsers, loading };
}
