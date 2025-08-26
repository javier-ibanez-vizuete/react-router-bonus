import { Link, NavLink, useSearchParams } from "react-router-dom";
import { db } from "../../db";
import { useState } from "react";

const INITIAL_FILTERS_STATE = { rating: "", price_from: "", price_to: "" };

export const ProductsPage = () => {
	const [selectValue, setSelectValue] = useState(INITIAL_FILTERS_STATE);

	let products = db.products;
	const categories = db.categories;
	const ratings = db.products.reduce((acc, product) => {
		if (!acc.includes(product.rating)) {
			acc.push(product.rating);
		}
		return acc;
	}, []);

	const [queryParams] = useSearchParams();
	// console.log("queryParams", queryParams);
	const queryParamsObj = Object.fromEntries([...queryParams]);
	// console.log("queryParamsObj", queryParamsObj);

	if (queryParamsObj?.categoryId) {
		products = products.filter((product) => product.categoryId == queryParamsObj.categoryId);
	}

	const { rating, price_from, price_to } = selectValue;

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setSelectValue((prevValue) => ({ ...prevValue, [name]: value }));
	};

	if (rating) {
		products = products.filter((product) => product.rating == selectValue.rating);
	}

	if (price_from && price_to) {
		products = products.filter((product) => {
			const isBigger = product.price >= price_from;
			const isSmaller = product.price <= price_to;
			return isBigger && isSmaller;
		});
	}

	if (price_from && !price_to) {
		products = products.filter((product) => product.price > price_from);
	}
	if (price_to && !price_from) {
		products = products.filter((product) => product.price < price_to);
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
			<section className="filters-section">
				<select name="rating" id="rating" value={rating} onChange={onInputChange}>
					<option value="">Elige una Calificacion</option>
					{ratings
						.sort((rateA, rateB) => rateA - rateB)
						.map((rate, index) => {
							return (
								<option key={`${rate}-${index}`} value={rate}>
									{rate}
								</option>
							);
						})}
				</select>
				<Link className="nav-item" to="/products">
					Todos los productos
				</Link>
				{categories.map((category) => (
					<Link key={category.id} className="nav-item" to={`/products?categoryId=${category.id}`}>
						{category.name}
					</Link>
				))}
				<div className="price-range-filter-container">
					<label htmlFor="price_from">Desde</label>
					<input
						type="number"
						name="price_from"
						id="price_from"
						value={price_from}
						onChange={onInputChange}
						placeholder="Introduzca precio minimo"
					/>
					<label htmlFor="price_to">Hasta</label>
					<input
						type="number"
						name="price_to"
						id="price_to"
						value={price_to}
						onChange={onInputChange}
						placeholder="Introduzca precio maximo"
					/>
				</div>
			</section>
			<button className="btn-reset-filters" onClick={() => setSelectValue(INITIAL_FILTERS_STATE)}>
				BorrarFiltros
			</button>
            {!products.length && <h2 className="warning-text">No existen coincidencias</h2>}
			{products.length > 0 &&
				products.map((product) => (
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
