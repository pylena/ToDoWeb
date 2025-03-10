import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
    '[Task] Add Task', 
    props<{ task: string }>());
export const removeTask = createAction(
    '[Task] Delete Task', 
    props<{ id: number }>());
export const toggleCompletion = createAction(
    '[Task] Toggle Task Completion', 
    props<{ id: number }>());