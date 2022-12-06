import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { User, UserSchema } from './schemas/user.schema'
import { AuthService } from './auth.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJWTConfig } from 'src/configs/jwt.config'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
	controllers: [AuthController],
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule, PassportModule],
			inject: [ConfigService],
			useFactory: getJWTConfig,
		}),
	],
	providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
