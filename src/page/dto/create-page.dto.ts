import { TopLevelCategory } from '../schemas/page.schema'

class TopPageAdvantageDto {
	title: string
	description: string
}

export class CreatePageDto {
	firstCategory: TopLevelCategory
	secondCategory: string
	alias: string
	title: string
	metaTitle: string
	metaDescription: string
	category: string
	advantages?: TopPageAdvantageDto[]
	seoText?: string
	tagsTitle: string
	tags: string[]
}
