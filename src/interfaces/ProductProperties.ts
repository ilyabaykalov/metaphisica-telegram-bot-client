export interface ProductProperties {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
}

export interface ProductsProperties {
	products: ProductProperties[];
}
