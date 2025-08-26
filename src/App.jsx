import { Link, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { FreelanceServices } from "./components/FreelanceServices";
import { ConsultingServices } from "./components/ConsultingServices";
import { PrivateRoute } from "./components/PrivateRoute";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductItemPage } from "./pages/ProductItemPage";
import { HomePage } from "./pages/HomePage";

export const App = () => {
    return (
        <div className="app-container">
            <NavBar />

            <main className="main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />

                    <Route path="/services" element={<ServicesPage />}>
                        <Route path="/services/freelance" element={<FreelanceServices />} />
                        <Route path="/services/consulting" element={<ConsultingServices />} />
                    </Route>

                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/:id" element={<ProductItemPage />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/private-1" element={<h1>Ruta Privada</h1>} />
                    </Route>

                    <Route path="*" element={<h1>404 - Ruta no encontrada</h1>} />
                </Routes>
            </main>

            <footer className="footer">
                <h2>Footer de la web</h2>
            </footer>
        </div>
    );
};
