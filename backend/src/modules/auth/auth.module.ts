import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth/auth.controller';
import { AuthService } from 'src/service/auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_KEY } from 'src/constant';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET_KEY, // 私钥(约定好)
      signOptions: { 
        expiresIn: 24 * 60 * 60 + 's' // 过期时间
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }]
})
export class AuthModule { }
