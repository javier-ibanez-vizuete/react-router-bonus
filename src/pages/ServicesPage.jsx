import { Link, Outlet } from "react-router-dom";

export const ServicesPage = () => {
    return (
        <div>
            <h1>Servicios</h1>
            <p>Estos son nuestros servicios:</p>

            <Link
                style={{
                    display: "inline-flex",
                    textDecoration: "none",
                    color: "coral",
                    backgroundColor: "lightgray",
                    padding: "12px",
                    borderRadius: "5px",
                    marginRight: "12px",
                }}
                to="/services/freelance"
            >
                Servicios Freelance
            </Link>
            
            <Link
                style={{
                    display: "inline-flex",
                    textDecoration: "none",
                    color: "coral",
                    backgroundColor: "lightgray",
                    padding: "12px",
                    borderRadius: "5px",
                }}
                to="/services/consulting"
            >
                Servicios de Consultoría
            </Link>

            <Outlet />
        </div>
    );
};
