import { createReducer, on } from '@ngrx/store';
import {
     addTask, 
     removeTask, 
     toggleCompletion, 
     } from './todo.action';

export interface Task {
  id: number; //id
  text: string; // content
  completed: boolean; // completed t or f
}

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: [], // initial state empty tasks
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, { id: Date.now(), text: task, completed: false }],
  })),
  on(removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(toggleCompletion, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ),
  })),
);