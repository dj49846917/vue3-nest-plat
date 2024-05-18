import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from 'src/service/user/user.service';
import { UserDto, UserTable } from 'src/type';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService){}

  @Get("/:id")
  // ParseIntPipe表示将id转换为int类型
  getData(@Param("id", ParseIntPipe) id: number) {
    return this.UserService.findOne(id);
  }

  @Get()
  // ParseIntPipe表示将id转换为int类型
  getList() {
    return this.UserService.findAll();
  }

  @Post("/add")
  add(@Body() body: UserDto) {
    return this.UserService.createData(body);
  }
  
  @Delete("/:id")
  delData(@Param("id", ParseIntPipe) id: number) {
    return this.UserService.delData(id);
  }

  @Put("/update")
  update(@Body() body: UserTable) {
    return this.UserService.updateData(body);
  }
}
