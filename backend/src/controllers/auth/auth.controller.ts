import { Controller, Post } from '@nestjs/common';
import { Public } from 'src/guard/auth/public.decorator';

@Controller('auth')
export class AuthController {
    @Public()
    @Post("login")
    login() {
        return "auth";
    }
}
