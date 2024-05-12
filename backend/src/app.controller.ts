import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

export type AddParamsType = {
  name: string,
  age: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get("/data/list")
  getAllData(): string {
    return this.appService.getAllData();
  }

  @Post("/data/add")
  addData(@Body() body:AddParamsType): string {
    return this.appService.addData(body);
  }

  @Put("/data/update")
  updateData(@Body() body:AddParamsType): string {
    return this.appService.updateData(body);
  }

  @Delete("/data/del")
  delData(@Body() body: {id: string}): string {
    return this.appService.delData(body);
  }
}
