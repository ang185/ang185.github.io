import { NAVBAR_TEXT } from "helpers/enums.types";
import { createContext, useContext, useState } from "react";

const initialContextValue = {
  language: NAVBAR_TEXT.SP,
  handleLanguage: () => {},
};

const initialLanguage = NAVBAR_TEXT.SP;

const LanguageViewContext = createContext(initialContextValue);

export const useLanguageView = () => {
  const context = useContext(LanguageViewContext);
  if (!context) {
    throw new Error(
      "useLanguageView must be used within a LanguageViewProvider"
    );
  }
  return context;
};

export const LanguageViewProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const handleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === NAVBAR_TEXT.SP ? NAVBAR_TEXT.EN : NAVBAR_TEXT.SP
    );
  };

  return (
    <LanguageViewContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageViewContext.Provider>
  );
};
