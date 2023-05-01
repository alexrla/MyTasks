import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() addTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Output() closeEvent = new EventEmitter();

  textTask: string ="";
  horaryTask: string = "";
  activeReminder: boolean = false;

  textTaskEmpty: boolean = false;

  close() {
    this.closeEvent.emit();
  }

  addTask() {
    if(!this.textTask) {
      this.textTaskEmpty = true;
      return;
    }

    const newTask = {
      text: this.textTask,
      horary: this.horaryTask,
      reminder: this.activeReminder,
    };

    this.textTask = "";
    this.horaryTask = "";
    this.activeReminder = false;

    this.addTaskEvent.emit(newTask);
  }
}
