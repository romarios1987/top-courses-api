class ProductCharacteristic {
	name: string
	value: string
}

export class ProductModel {
	image: string
	title: string
	price: number
	oldPrice: number
	credit: number
	initialRating: number
	description: string
	advantages: string
	disAdvantages: string
	categories: string[]
	tags: string[]
	characteristics: ProductCharacteristic[]
}
