import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task/task.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  faPlus = faPlus;
  tasks!: Task[];
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor( 
    private taskService: TaskService,
    private uiService: UiService,
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  createTask() {
    this.uiService.toggleAddTask();
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  activateReminder(task: Task) {
    task.reminder = !task.reminder;

    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(newTask: Task) {
    this.taskService.addNewTask(newTask).subscribe((data) => (this.tasks.push(data)));

    this.close();
  }

  close() {
    this.uiService.toggleAddTask();
  }
}
