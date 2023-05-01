import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from 'src/app/Task';

import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() deleteTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Output() activateReminderEvent: EventEmitter<Task> = new EventEmitter();

  faClose = faClose;

  constructor() {}

  deleteTask(task: Task) {
    this.deleteTaskEvent.emit(task);
  }

  activateReminder(task: Task) {
    this.activateReminderEvent.emit(task);
  }
}
