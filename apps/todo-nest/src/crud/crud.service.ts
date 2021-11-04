import { Injectable } from '@nestjs/common';

export interface TaskModel{
    id : number;
    name : string;
    done : boolean;
}

@Injectable()
export class CrudService {

    private tasks : TaskModel[] = [{
        id : 1,
        name : 'SALUT',
        done : false
    }]
    private id = 0
    getById(id:number){
        return this.tasks.find((task) => task.id === id)
    }   

    findAll(){
        return this.tasks
    }

    create(task : TaskModel){
        task.id = this.id
        this.tasks.push(task)
        this.id ++
    }
}
