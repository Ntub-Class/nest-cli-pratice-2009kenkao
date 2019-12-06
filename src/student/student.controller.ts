import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './service/student.service';


@Controller('student')
export class StudentController {
    constructor(private readonly appService: StudentService) { }

    @Get()
    getStudent() {
        return 'OK';
    }

    @Get(':id')
    getOneStudent(@Param('id') id) {
        return 'OK';
    }

    @Post()
    postStudent(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putStudent(@Body() body, @Param('id') id) {
        return 'OK';
    }

    @Delete(':id')
    deleteStudent(@Param('id') id) {
        return 'OK';
    }
}
