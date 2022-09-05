import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  getImage: string
  setGetImage: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext({} as AuthContextData);

function ControllerApp({ children }: AuthProviderProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [getImage, setGetImage] = useState('');

  return (
    <AuthContext.Provider
      value={{
        getImage,
        modalVisible,
        setGetImage,
        setModalVisible
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useControllerApp() {
  const context = useContext(AuthContext);
  return context;
}

export { ControllerApp, useControllerApp };
