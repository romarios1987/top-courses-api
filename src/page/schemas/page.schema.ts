import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
export type PageDocument = HydratedDocument<Page>

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

class PageAdvantage {
	@Prop()
	title: string

	@Prop()
	description: string
}

@Schema({ timestamps: true })
export class Page {
	@Prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory

	@Prop()
	secondCategory: string

	@Prop()
	title: string

	@Prop({ unique: true })
	alias: string

	@Prop()
	category: string

	@Prop([PageAdvantage])
	advantages: PageAdvantage[]

	@Prop()
	seoText?: string

	@Prop()
	metaTitle: string

	@Prop()
	metaDescription: string

	@Prop()
	tagsTitle: string

	@Prop([String])
	tags: string[]
}
export const PageSchema = SchemaFactory.createForClass(Page)
