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

	async findById(id: string): Promise<Product | null> {
		return this.productModel.findById(id).exec()
	}

	async deleteById(id: string): Promise<Product | null> {
		return this.productModel.findByIdAndDelete(id).exec()
	}

	async updateById(id: string, dto: CreateProductDto): Promise<Product | null> {
		return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec()
	}
}
