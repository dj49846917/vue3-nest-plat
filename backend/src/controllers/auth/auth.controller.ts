import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/guard/auth/public.decorator';
import { AuthService } from 'src/service/auth/auth.service';
import { error, success } from 'src/utils';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}
  @Public()
  @Post("login")
  login(@Body() params) {
    return this.authService.login(params.username, params.password)
    .then((data)=>success(data, '登录成功'))
    .catch(err=>error(err.message))
  }
}
