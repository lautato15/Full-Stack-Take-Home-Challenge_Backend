import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  create(@Body() loginDto: LoginDto) {
    if (loginDto.email && loginDto.password) {
      return this.authService.login(loginDto.email, loginDto.password);
    }
  }
}
