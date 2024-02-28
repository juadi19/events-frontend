import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

const useTokenValidation = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem("JWT");
        if (!token) {
          window.location.href = "/auth/signin";
          return;
        }

        const response = await fetch("http://localhost:3000/auth/validate", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          window.location.href = "/auth/signin";
          console.error("Token is not valid");
        } else {
          const data = await response.json();
          const { id, email, name, role } = data;
          setUser({ id, email, name, role });
        }
      } catch (error) {
        console.log(error);
      }
    };

    validateToken();
  }, []);

  return user;
};

export default useTokenValidation;
