import { Component } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from "./todo/todo.component";
import { Store } from '@ngrx/store';
import { addTask } from './state/todo.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoFormComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-web';

  constructor(private store: Store) {}

  onAddTask(task: string) {
    this.store.dispatch(addTask({ task }));
  }
}
