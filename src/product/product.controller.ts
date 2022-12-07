import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	HttpException,
	HttpStatus,
	UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'
import { CreateProductDto } from './dto/create-product.dto'
import { FindProductDto } from './dto/find-product.dto'
import { PRODUCT_NOT_FOUND_ERROR } from './product.constants'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.productService.create(dto)
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		const product = await this.productService.findById(id)
		if (!product) {
			throw new HttpException(PRODUCT_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND)
		}
		return product
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedProduct = await this.productService.deleteById(id)
		if (!deletedProduct) {
			throw new HttpException(PRODUCT_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND)
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: CreateProductDto) {
		const updatedProduct = await this.productService.updateById(id, dto)
		if (!updatedProduct) {
			throw new HttpException(PRODUCT_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND)
		}
		return updatedProduct
	}

	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindProductDto) {
		console.log(dto)
	}
}
