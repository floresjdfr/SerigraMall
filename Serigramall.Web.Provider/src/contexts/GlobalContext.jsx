import { createContext, useState } from "react";

function GlobalProvider({ ...props }) {
  const [showToast, setShowToast] = useState(false);
  const [toastHeader, setToastHeader] = useState("");
  const [toastBody, setToastBody] = useState("");

  const value = {
    //Toast
    showToast,
    setShowToast,
    toastHeader,
    setToastHeader,
    toastBody,
    setToastBody,
  };

  return <GlobalContext.Provider {...props} value={value} />;
}

export const GlobalContext = createContext();
export default GlobalProvider;
