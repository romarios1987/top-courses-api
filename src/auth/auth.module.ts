import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthController } from './auth.controller'
import { User, UserSchema } from './schemas/user.schema'

@Module({
	controllers: [AuthController],
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
	],
})
export class AuthModule {}
