import mockProducts from "../../data/mockProducts";

const productMap = new Map(mockProducts.map((p) => [p.id, p]));

export function getProduct(productId: string) {
	return productMap.get(productId);
}

export default productMap;
