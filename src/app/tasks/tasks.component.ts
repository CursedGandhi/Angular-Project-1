import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type newTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required: true})id!: string;
  @Input()n?: string;
  isAddingTask = false;
  
  
  constructor(private tasksService: TaskService){

  }
  
  get selectedUserTask()
  {
    return this.tasksService.getUserTasks(this.id);
  }
  
  onStartAddTask()
  {
    this.isAddingTask = true;
  }
  cancel()
  {
    this.isAddingTask = false;
  }
}
