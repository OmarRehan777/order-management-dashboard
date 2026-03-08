// This file contains a mapping of product IDs to product details for the order management dashboard. It imports mock product data and creates a Map for easy retrieval of product information based on their IDs.
import mockProducts from "../../data/mockProducts";

const productMap = new Map(mockProducts.map((p) => [p.id, p]));

export function getProductById(productId: string) {
	return productMap.get(productId);
}

export default productMap;
