import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Anson', email: 'anson@anson.com' }];
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return {};
  }
}
