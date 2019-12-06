import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) { }

    @Get()
    getUser() {
        return 'OK';
    }

    @Get(':id')
    getOneUser(@Param('id') id) {
        return 'OK';
    }

    @Post()
    postUser(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return 'OK';
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'OK';
    }
}
