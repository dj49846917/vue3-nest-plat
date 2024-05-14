import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get()
    getData() {
        return "22211"
    }
}
