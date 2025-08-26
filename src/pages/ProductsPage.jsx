import { Link, useSearchParams } from "react-router-dom";
import { db } from "../../db";

export const ProductsPage = () => {
    let products = db.products;
    const categories = db.categories;

    const [queryParams] = useSearchParams();
    console.log("queryParams", queryParams);
    const queryParamsObj = Object.fromEntries([...queryParams]);
    console.log("queryParamsObj", queryParamsObj);

    if (queryParamsObj?.categoryId) {
        products = products.filter((product) => product.categoryId == queryParamsObj.categoryId);
    }

    return (
        <div
            className="grid"
            style={{
                display: "grid",
                gap: 24,
                padding: 24,
                justifyContent: "center",
                alignItems: "center",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
        >
            <Link className="nav-item" to="/products">
                Todos los productos
            </Link>
            {categories.map((category) => (
                <Link key={category.id} className="nav-item" to={`/products?categoryId=${category.id}`}>
                    {category.name}
                </Link>
            ))}
            {products.map((product) => (
                <article
                    key={product.id}
                    className="card"
                    style={{
                        padding: "0px 0px 16px 0px",
                        overflow: "hidden",
                        backgroundColor: "#f5f5f520",
                        width: 400,
                        borderRadius: 8,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        display: "grid",
                        gap: 16,
                    }}
                >
                    {/* Imagen de fondo del producto, aunq son fake de lorem picsum */}
                    <div
                        style={{
                            height: 120,
                            display: "grid",
                            placeItems: "center",
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: "auto",
                            backgroundPosition: "center",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 18,
                            borderBottom: "1px solid #1e2753",
                        }}
                    ></div>

                    <div style={{ display: "grid", textAlign: "center", gap: 8 }}>
                        <h3 style={{ margin: 0 }}>{product.name}</h3>
                        <div style={{ color: "#a9b6ff", fontSize: 12 }}>SKU: {product.sku}</div>
                        <div style={{ fontWeight: 700 }}>{product.price}</div>

                        <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
                            <Link className="btn link" to={`/products/${product.id}`}>
                                Ver detalle
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};
