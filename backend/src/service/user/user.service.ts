import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { UserDto, UserTable } from "src/type";
import { DeleteResult, Repository } from "typeorm";

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

  // 查询所有信息
  findAll(): Promise<User[]> {
    return this.userTable.find();
  }

  // 新增
  createData(params: UserDto): Promise<User> {
    let user = new User();
    user = {
      ...user,
      ...params,
      active: 1
    }
    return this.userTable.save(user);
  }

  // 删除
  delData(id: number): Promise<DeleteResult> {
    return this.userTable.delete(id);
  }

  // 修改数据
  async updateData(params: UserTable): Promise<User> {
    const user = await this.findOne(params.id);
    const newUser = JSON.parse(JSON.stringify(params));
    if(newUser.id) {
      delete newUser.id
    }
    this.userTable.merge(user, newUser);
    return this.userTable.save(user);
  }
}