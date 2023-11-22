import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Ajusta según la librería de enrutamiento que estés utilizando
import { useJwt } from "../stores/jwt";

interface IAuthRedirect {
  origen?: string;
}

const useAuthRedirect = ({origen}: IAuthRedirect) => {
  const navigate = useNavigate();
  const setToken = useJwt((state) => state.setToken);
  const setCorreo = useJwt((state) => state.setCorreo);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const correo = localStorage.getItem("email");
    if (!token) {
      navigate("/");
    }else if (origen && origen === "login" && token) {
      navigate("/home");
    }

    if (token) {
      setToken(token);
    }
    if(correo){
      setCorreo(correo);
    }

  }, [navigate]);
};

export default useAuthRedirect;
