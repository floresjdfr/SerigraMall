import { createContext, useState } from "react";

function GlobalProvider({ ...props }) {
  const [showToast, setShowToast] = useState(false);
  const [toastHeader, setToastHeader] = useState("");
  const [toastBody, setToastBody] = useState("");
  const [productsState, setProductsState] = useState([]);
  const [error, setError] = useState(Error());
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    //Toast
    showToast,
    setShowToast,
    toastHeader,
    setToastHeader,
    toastBody,
    setToastBody,

    //products
    productsState, setProductsState,

    //loading
    isLoading, setIsLoading

  };

  return <GlobalContext.Provider {...props} value={value} />;
}

export const GlobalContext = createContext();
export default GlobalProvider;
