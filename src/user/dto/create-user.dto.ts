import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  @MinLength(3)
  @MaxLength(25)
  email: string;

  @IsString()
  password: string;
}
