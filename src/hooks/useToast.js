import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = (type, msg) => {
    toast[type](msg, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return { showToast };
};
