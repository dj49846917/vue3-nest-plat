import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/guard/auth/public.decorator';
import { AuthService } from 'src/service/auth/auth.service';
import { wrapperResponse } from 'src/utils';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}
  @Public()
  @Post("login")
  login(@Body() params) {
    return wrapperResponse(this.authService.login(params.username, params.password), "登录成功")
  }
}
