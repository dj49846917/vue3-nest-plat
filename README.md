# vue3-nest-plat
使用vue3+nestjs的一个后台管理系统

# 项目启动
  * 启动前端项目：
    ```
      cd frontend
      npm run dev
    ```
  * 启动后端项目:
    ```
      cd backend
      npm run start:dev
    ```

# 介绍
  * 使用vue3 + vite4 + ts + Nestjs + 无界微前端
  * 从0到1全栈开发一个管理后台项目
  * 业务功能包含框架搭建、登陆、权限、电子书管理等等
  * 无界微前端框架（基于webcomponent和iframe最新理念）

# 管理后端功能介绍：
  * 用户登录
  * 权限管理
    - 管理菜单
    - 管理用户
    - 管理角色
    - 管理权限
  * 图书管理
    - 图书列表查询
    - 图书上传
    - 图书阅读

# 技术架构
## 建站
  如何建站？
  * 域名：阿里云租用域名
  * 服务器：租用阿里云ECS服务器
  * web服务：nginx

## 开发
### 前端
  * 框架：vue-vben-admin 
    - 项目地址：https://github.com/vbenjs/vue-vben-admin?tab=readme-ov-file
  * 核心库：vue3全家桶（vue3+vueRouter4+pinia2）、vite4、ant-design-vue、windicss
  
### 后端
  * 框架：Nodejs + Nestjs
    - 依赖注入
    - Restful API
    - JWT权鉴
    - CORS跨域
    - ORM模型
  * 数据库：MySQL

# 前端部分
## 项目搭建
  ```
    git clone https://github.com/vbenjs/vue-vben-admin.git
  ```
  * 安装pnpm
    ```
      npm install -g pnpm
      pnpm install
    ```
  * 启动
    ```
      npm run dev
    ```
