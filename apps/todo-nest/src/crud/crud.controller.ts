import { Body, Controller, Get, Param } from '@nestjs/common';
import { CrudService } from './crud.service';

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

}
