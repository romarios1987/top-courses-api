export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

class PageAdvantage {
	title: string
	description: string
}

export class PageModel {
	firstCategory: TopLevelCategory
	secondCategory: string
	category: string
	alias: string
	title: string
	metaTitle: string
	metaDescription: string
	tagsTitle: string
	tags: string[]
	seoText?: string
	advantages?: PageAdvantage[]
}
