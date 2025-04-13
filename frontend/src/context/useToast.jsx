import { createContext, useContext } from 'react';
import { useSnackbar } from 'notistack';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const showToast = (message, options = {}) => {
    enqueueSnackbar(message, options);
    console.log("Toast message: ", message, options);
  };

  return (
    <ToastContext.Provider value={showToast}>
        {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
