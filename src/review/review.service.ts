import { Model, Types } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateReviewDto } from './dto/create-review.dto'
import { Review, ReviewDocument } from './schemas/review.schema'

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
	) {}

	async create(dto: CreateReviewDto): Promise<Review> {
		return this.reviewModel.create(dto)
		// const createdReview = new this.reviewModel(dto)
		// return createdReview.save()
	}

	async delete(id: string): Promise<Review | null> {
		return this.reviewModel.findByIdAndDelete(id).exec()
	}

	async findByProductId(productId: string): Promise<Review[]> {
		return this.reviewModel
			.find({ productId: new Types.ObjectId(productId) })
			.exec()
	}
}
