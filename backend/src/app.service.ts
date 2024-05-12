import { Injectable } from '@nestjs/common';
import { AddParamsType } from './app.controller';

@Injectable()
export class AppService {
  getData(): string {
    return "get Data";
  }

  getAllData(): string {
    return "All Data"
  }

  addData(params: AddParamsType): string {
    return "add Data" + JSON.stringify(params);
  }

  updateData(params: AddParamsType): string {
    return "update Data" + JSON.stringify(params);
  }

  delData(params: {id: string}): string {
    return `删除成功id: ${params.id}`;
  }
}
