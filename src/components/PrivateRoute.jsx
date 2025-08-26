import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const { user } = useContext(AuthContext);

    console.log(user);

    if (!user) {
        return <Navigate to="/" state={{ hayUsuario: "no existe usuario" }} />;
    }

    return <Outlet />;
};
