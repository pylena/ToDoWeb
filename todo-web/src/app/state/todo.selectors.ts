import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TaskState } from './todo.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectTasks = createSelector(
  selectTaskState,
  (state) => state.tasks
);