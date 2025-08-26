import { useLocation } from "react-router-dom"

export const HomePage = () => {
    const location = useLocation();
    console.log("location", location);

    const routeState = location?.state;

    return (
        <div>
            <h1>Home</h1>

            {routeState?.nombre && <h2>Nombre: {routeState.nombre}</h2>}
            {routeState?.raza && <h2>Raza: {routeState.raza}</h2>}
        </div>
    )
}