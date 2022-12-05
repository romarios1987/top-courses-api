import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { Product, ProductDocument } from './schemas/product.schema'

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product.name) private productModel: Model<ProductDocument>,
	) {}

	async create(dto: CreateProductDto): Promise<Product> {
		return this.productModel.create(dto)
	}
}
