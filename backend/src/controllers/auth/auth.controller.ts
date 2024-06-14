import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/guard/auth/public.decorator';
import { AuthService } from 'src/service/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}
  @Public()
  @Post("login")
  async login(@Body() params) {
    await this.authService.login(params.username, params.password)
    return "auth";
  }
}
