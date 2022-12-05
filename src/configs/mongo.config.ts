import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions } from '@nestjs/mongoose'

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<MongooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions(),
	}
}

const getMongoString = (configService: ConfigService) =>
	'mongodb://' +
	configService.get('MONGO_LOGIN') +
	':' +
	configService.get('MONGO_PASSWORD') +
	'@' +
	configService.get('MONGO_HOST') +
	':' +
	configService.get('MONGO_PORT') +
	'/' +
	configService.get('MONGO_AUTH_DATABASE') +
	'?directConnection=true'

const getMongoOptions = () => ({
	// useNewUrlParser: true,
	// useUnifiedTopology: true,
	// useCreateIndex: true,
})
