import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "./public.decorator";
import { JwtService } from "@nestjs/jwt";
import { JWT_SECRET_KEY } from "src/constant";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if(isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request);
    if(!token) {
      throw new UnauthorizedException();
    }
    try {
      // 解析token
      const payload = await this.jwtService.verifyAsync(token, {
        secret: JWT_SECRET_KEY
      })
      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }
}

// 解析token
function extractTokenFromHeader(request: any): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}
