import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('register')
  register(): string {
    return this.userService.createUser();
  }
}