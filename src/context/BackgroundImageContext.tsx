"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BackgroundImageContextType = {
  image: string | null;
  setImage: (src: string) => void;
};

const BackgroundImageContext = createContext<
  BackgroundImageContextType | undefined
>(undefined);

export const useBackgroundImage = () => {
  const context = useContext(BackgroundImageContext);
  if (!context) {
    throw new Error(
      "useBackgroundImage must be used within a BackgroundImageProvider"
    );
  }
  return context;
};

export const BackgroundImageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <BackgroundImageContext.Provider value={{ image, setImage }}>
      {children}
    </BackgroundImageContext.Provider>
  );
};
