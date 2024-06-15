import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { UserService } from 'src/service/user/user.service';
import { UserDto, UserTable } from 'src/type';
import { wrapperResponse } from 'src/utils';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService){}

  @Get("info")
  getUserByToken(@Req() request) {
    // 前面gurad使用了request['user']=payload,这里就可以直接用request.user拿到token解析后的userinfo
    return wrapperResponse(this.UserService.findByUsername(request.user.username), "获取用户信息成功");
  }

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
