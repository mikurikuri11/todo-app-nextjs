import { User } from "@/types/api/user"

export const getAllUser = async (): Promise<Array<User> | null> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      cache: "no-store",
    });

    const users = await response.json();
    return users;
  } catch (error) {
    alert("An error occurred"); // ネットワークエラーやその他のエラーケースのアラート
    return null;
  }
};
