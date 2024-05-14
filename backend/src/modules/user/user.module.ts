import { Module } from '@nestjs/common';
import { UserController } from '../../controllers/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/service/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
