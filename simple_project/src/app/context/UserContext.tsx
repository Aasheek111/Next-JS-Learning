"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface dataType {
  email: string;
  image: string;
  id: string;
  name: string;
}
interface userType {
  user: dataType | undefined | null;
  setUser: (user: dataType) => void;
}

export const userContext = createContext<userType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<dataType | null>(null);

  const data = { user, setUser };

  useEffect(() => {
    async function getUser() {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUser(data.user);
    }
    getUser();
  }, []);
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export const useUser = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
