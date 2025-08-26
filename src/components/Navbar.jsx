import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NavBar = () => {
    const { user, setUser } = useContext(AuthContext);

    const usuario = {
        nombre: "Juan",
        apellido: "Macias",
    };

    return (
        <nav className="navbar">
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                <strong>Router Boilerplate - Eleven Code®</strong>
                <NavLink className="nav-item" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-item" to="/contact" state={usuario}>
                    Contact
                </NavLink>
                <NavLink className="nav-item" to="/about">
                    About
                </NavLink>
                <NavLink className="nav-item" to="/about?nombre=juan&apellido=macias&userId=123123123123">
                    About Juan
                </NavLink>
                <NavLink className="nav-item" to="/services">
                    Services
                </NavLink>
                <NavLink className="nav-item" to="/products/noexiste">
                    Prueba
                </NavLink>
                <NavLink to="/products" className={"nav-item"}>
                    Products
                </NavLink>
                {user && (
                    <NavLink to="/private-1" className={"nav-item"}>
                        Ruta Privada 1
                    </NavLink>
                )}
            </div>

            <div onClick={() => setUser((prev) => !prev)}>
                {user ? "Usuario logueado" : "No hay usuario, pulsa para acceder"}
            </div>
        </nav>
    );
};
