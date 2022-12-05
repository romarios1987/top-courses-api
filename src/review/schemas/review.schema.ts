import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types, HydratedDocument } from 'mongoose'

export type ReviewDocument = HydratedDocument<Review>

@Schema({ timestamps: true })
export class Review {
	@Prop()
	name: string

	@Prop()
	title: string

	@Prop()
	description: string

	@Prop()
	rating: number

	@Prop()
	productId: Types.ObjectId
}

export const ReviewSchema = SchemaFactory.createForClass(Review)
