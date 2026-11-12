import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserRole } from './enums/user-role.enum';

//http://10.20.30.40:3000/users
@Controller('users')
export class UsersController {
  //CRUD - Create, Read, Update, Delete
  //POST -> //http://10.20.30.40:3000/users (v tele ozhidaem dannye usera)
  @Post()
  create(@Body() user: User): User {
    //TODO zdes budet obrashenie k servisu
    return new User();
  }
  //GET ->http://10.20.30.40:3000/users (nichego v body pisat ne nuzhno)
  @Get()
  getAll(): User[] {
    //TODO zdes budet obrashenie k servisu
    return [];
  }

  //GET ->http://10.20.30.40:3000/users/7
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): User {
    //TODO zdes budet obrashenie k servisu
    return new User();
  }

  // PATCH -> http://10.20.30.40:3000/users/7 (в теле ожидаем изменяемые данные юзера)
  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Param('id', ParseIntPipe) id: number, @Body() user: User): void {
    // TODO здесь будет обращение к сервису
    console.log();
  }

  // DELETE -> http://10.20.30.40:3000/users/7
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteById(@Param('id', ParseIntPipe) id: number): void {
    // TODO здесь будет обращение к сервису
    console.log();
  }

  // PATCH -> http://10.20.30.40:3000/users/5/set-role/ADMIN
  @Patch(':id/set-role/:role')
  @HttpCode(HttpStatus.NO_CONTENT)
  setRole(
    @Param('id', ParseIntPipe) id: number,
    @Param('role', new ParseEnumPipe(UserRole)) role: UserRole,
  ): void {
    // TODO здесь будет обращение к сервису
    console.log();
  }

}







