import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { getMongoConfig } from './configs/mongo.config'
import { PageModule } from './page/page.module'
import { ProductModule } from './product/product.module'
import { ReviewModule } from './review/review.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		PageModule,
		ProductModule,
		ReviewModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
