import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService) {}


    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.userService.findOne(+id)
    }

    @Post()
    create(@Body() body:any){
        return this.userService.create(body)
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() body:any){
        return this.userService.update(+id,body)
    }

    @Delete(':id')
    delData(@Param('id') id:number){
        return this.userService.delData(+id)
    }

}
