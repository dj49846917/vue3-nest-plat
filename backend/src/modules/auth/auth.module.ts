import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth/auth.controller';
import { AuthService } from 'src/service/auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guard/auth/auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }]
})
export class AuthModule {}
