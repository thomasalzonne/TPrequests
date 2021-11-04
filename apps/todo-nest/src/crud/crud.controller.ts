import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CrudService, TaskModel } from './crud.service';

@Controller('crud')
export class CrudController {

    constructor(private crudService: CrudService){}

    @Get(":id")
    getById(@Body("id") id: number){
        return this.crudService.getById(id)
    }

    @Get()
    findAll(){
        return this.crudService.findAll()
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() task: TaskModel){
        return this.crudService.create(task)
    }
    
}
