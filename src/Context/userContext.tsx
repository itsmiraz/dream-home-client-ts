import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type TUserType = {
  name: string;
  email: string;
  password: string;
  profileImg: string;
  role: "admin" | "user" | "seller" | "mod";
  isDeleted: boolean;
};

type AuthContextType = {
  currentUser: TUserType;
  setUser: Dispatch<SetStateAction<TUserType>>;
};

export const AuthContextProvider = createContext<TUserType | undefined>(
  undefined
);

const UserContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setUser] = useState<TUserType | undefined>(undefined);

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("currentUser");
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  const value: AuthContextType = {
    currentUser,
    setUser,
  };

  return (
    <AuthContextProvider.Provider value={value}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default UserContext;
