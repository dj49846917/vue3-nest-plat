import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  // 固定写法，通过typeorm获取admin_user的表数据
  constructor(
    @InjectRepository(User)
    // userTable这个名称可以随便取
    private readonly userTable: Repository<User>
  ) { }

  // 查询单条信息
  findOne(id: number): Promise<User> {
    return this.userTable.findOneBy({ id });
  }
}