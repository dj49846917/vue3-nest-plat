import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from 'src/service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService){}

  @Get("/:id")
  // ParseIntPipe表示将id转换为int类型
  getData(@Param("id", ParseIntPipe) id: number) {
    return this.UserService.findOne(id);
  }
}
