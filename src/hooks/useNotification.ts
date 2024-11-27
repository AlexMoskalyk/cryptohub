import { toast, ToastOptions } from 'react-toastify';


import { useTheme } from '../context/ThemeContext';

interface NotificationProps {
  message: string;
  type: 'error' | 'success' | 'info';
}

const useNotification = () => {
  const { isDarkMode } = useTheme();
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    theme: isDarkMode ? "dark" : "light",
    icon: false
  };

  const displayNotification = ({ message, type }: NotificationProps) => {
    switch (type) {
      case 'error':
        toast.error(message, options);
        break;
      case 'success':
        toast.success(message, options);
        break;
      case 'info':
        toast.info(message, options);
        break;
      default:
        break;
    }
  };

  return displayNotification;
};

export default useNotification;