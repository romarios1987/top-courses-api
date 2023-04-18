import { IsString, IsEmail } from 'class-validator';
export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  nickname: string;

  @IsString()
  password: string;
}
