import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { FindProductDto } from './dto/find-product.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.productService.create(dto)
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		console.log(id)
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		console.log(id)
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: CreateProductDto) {
		console.log(id, dto)
	}

	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindProductDto) {
		console.log(dto)
	}
}
