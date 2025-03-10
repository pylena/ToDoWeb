import { Component } from '@angular/core';
import { removeTask, toggleCompletion } from '../state/todo.action';
import { Store } from '@ngrx/store';
import { selectTasks } from '../state/todo.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  get tasks$() {
    return this.state.select(selectTasks);
  }

  constructor(private state: Store) {}

  onDeleteTask(id: number) {
    this.state.dispatch(removeTask({ id }));
  }

  onToggleCompletion(id: number) {
    this.state.dispatch(toggleCompletion({ id }));
  }
}
