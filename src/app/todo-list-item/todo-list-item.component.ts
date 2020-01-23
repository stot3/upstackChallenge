import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../todo';
import { $ } from 'protractor';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent{

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  saveDuration: EventEmitter<Todo> = new EventEmitter();

  timeSpent = 0; 
  minutes = 0
  seconds = 0
  
  constructor() {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
  playStateChanged(duration: number){
    this.todo.duration = duration
    this.saveDuration.emit(this.todo)
  }
  updateTimeSpent($event){
    this.timeSpent = 1800 - $event;
    this.minutes = Math.trunc(this.timeSpent / 60)
    this.seconds = Math.trunc( this.timeSpent - this.minutes * 60 )
  }
}
