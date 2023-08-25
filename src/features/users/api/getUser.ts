import { User } from "@/types/api/user"

export const getUser = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      cache: "no-store",
    });

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("An error occurred:", error);
    alert("An error occurred"); // ネットワークエラーやその他のエラーケースのアラート
    return null;
  }
};
