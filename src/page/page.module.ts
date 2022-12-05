import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PageController } from './page.controller'
import { Page, PageSchema } from './schemas/page.schema'

@Module({
	controllers: [PageController],
	imports: [
		MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
	],
})
export class PageModule {}
