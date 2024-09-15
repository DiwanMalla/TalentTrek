import React, { createContext, useState, ReactNode } from "react";

interface ProfileContextType {
  profileName: string;
  setProfileName: (name: string) => void;
}

export const ProfileContext = createContext<ProfileContextType>({
  profileName: "Guest",
  setProfileName: () => {},
});

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profileName, setProfileName] = useState<string>("Guest");

  return (
    <ProfileContext.Provider value={{ profileName, setProfileName }}>
      {children}
    </ProfileContext.Provider>
  );
};
