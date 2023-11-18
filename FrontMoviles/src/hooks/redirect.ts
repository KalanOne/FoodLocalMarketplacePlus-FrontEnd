import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Ajusta según la librería de enrutamiento que estés utilizando

interface UseAuthRedirectProps {
  loginPath: string; 
  indexPath: string; 
}

const useAuthRedirect = ({ loginPath, indexPath }: UseAuthRedirectProps) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const redirectPath = token ? indexPath : loginPath;
    setAuth(token ? true : false);

    navigate(redirectPath);
  }, [navigate, loginPath, indexPath]);

  return auth;
};

export default useAuthRedirect;
