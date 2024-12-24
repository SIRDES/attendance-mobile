import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoading: boolean;
}

// Define a User type (customize this based on your app's requirements)
interface User {
  id: string;
  name: string;
  email: string;
  notificationCount: number;
  profileImage: string | null;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>({
    id: "string",
    name: "string",
    email: "string",
    notificationCount: 0,
    profileImage: null,
  });

  const login = (userData: User) => {
    setUser(userData);
    // Optionally, persist the user in local storage or cookies
  };

  const logout = () => {
    setUser(null);
    // Optionally, clear user data from local storage or cookies
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
