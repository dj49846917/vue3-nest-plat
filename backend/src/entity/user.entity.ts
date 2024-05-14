import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("admin_user") // 对应admin_user表
export class User {
  @PrimaryGeneratedColumn()  // 自增
  id: number;
  
  @Column()   // 列
  @Unique(["username"]) // 唯一值
  username: string;
  
  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  nickname: string;

  @Column()
  active: number;

  @Column()
  avatar: string;
}