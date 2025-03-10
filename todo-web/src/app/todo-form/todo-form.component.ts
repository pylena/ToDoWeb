import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todoForm: FormGroup;
  @Output() addTaskEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.todoForm.valid) {
      this.addTaskEvent.emit(this.todoForm.value.task);
      this.todoForm.reset();
  }

}
}
