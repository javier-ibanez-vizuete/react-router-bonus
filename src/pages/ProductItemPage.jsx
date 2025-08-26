import { useParams } from "react-router-dom";
import { db } from "../../db";

export const ProductItemPage = () => {
    const { products } = db;

    const params = useParams();
    console.log("params", params);

    const productId = params?.id;
    console.log("productId", productId);

    const product = products.find((product) => product.id == productId);

    if (!product) {
        return <div className="card">Producto no encontrado</div>;
    }

    
    return (
        <div
            className="card"
            style={{ display: "grid", gridTemplateColumns: "minmax(240px, 420px) 1fr", gap: 20, alignItems: "center" }}
        >
            <div
                style={{
                    background: "#0e1530",
                    border: "1px solid #1f2a5a",
                    borderRadius: 14,
                    minHeight: 400,
                    display: "grid",
                    placeItems: "center",
                    overflow: "hidden",
                }}
            >
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                ) : (
                    <span style={{ color: "#8aa0ff99" }}>Sin imagen</span>
                )}
            </div>

            <div style={{ display: "grid", gap: 10, textAlign: "left" }}>
                <h2 style={{ margin: 0 }}>{product.name}</h2>
                <div style={{ color: "#a9b6ff", fontSize: 12 }}>SKU: {product.sku}</div>
                <p style={{ margin: 0 }}>{product.description}</p>
                <div style={{ fontWeight: 700 }}>{product.price}</div>

                {/* Etiquetas */}
                {!!product.tags?.length && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {product.tags.map((tag) => (
                            <span key={tag} className="badge">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Meta */}
                <div style={{ display: "grid", gap: 6, fontSize: 14 }}>
                    <div>
                        Stock: <b>{product.stock}</b>
                    </div>
                    <div>
                        Rating: <b>{product.rating}</b>
                    </div>
                    <div>
                        Category ID: <b>{product.categoryId}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};
