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
  currentUser: TUserType | undefined;
  setUser: Dispatch<SetStateAction<TUserType | undefined>>;
};

export const AuthContextProvider = createContext<AuthContextType | undefined>(
  undefined
);

const UserContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setUser] = useState<undefined | TUserType>(undefined);
  const userFromLocalStorage = localStorage.getItem("currentUser");
  useEffect(() => {
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    } else {
      setUser(undefined);
    }

    // const token = cookies.dreamHomeAccessToken;
  }, [userFromLocalStorage]);

  const globalvalue: AuthContextType = {
    currentUser,
    setUser,
  };

  return (
    <AuthContextProvider.Provider value={globalvalue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default UserContext;
