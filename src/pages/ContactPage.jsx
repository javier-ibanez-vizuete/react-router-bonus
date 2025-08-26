import { useLocation, useNavigate } from "react-router-dom";

export const ContactPage = () => {
    const navigate = useNavigate();

    const location = useLocation();
    console.log("location", location);

    return (
        <div>
            <h1>Contact Page</h1>
            <button onClick={() => navigate("/", {state: {raza: "podenco", nombre: "bartolo"}})}>Ir a la Home</button>
            <button onClick={() => navigate("/services")}>Ir a Services</button>
            <button onClick={() => navigate("/services/consulting")}>Ir Services Consulting</button>
        </div>
    );
};
