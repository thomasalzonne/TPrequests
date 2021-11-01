import { Injectable } from '@nestjs/common';

interface TaskModel{
    id : number;
    name : string;
    done : boolean
}

@Injectable()
export class CrudService {

    tasks : TaskModel[] = [{
        id : 1,
        name : 'SALUT FDPM',
        done : false
    }]

    getById(id:number){
        return this.tasks.find((task) => task.id === id)
    }   

    findAll(){
        return this.tasks
    }
}
