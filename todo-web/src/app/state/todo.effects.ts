import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { addTask, removeTask, toggleCompletion } from './todo.action';
import { map, withLatestFrom } from 'rxjs/operators';
import { selectTasks } from './todo.selectors';

@Injectable()
export class TaskEffects {
  constructor(
    private action$: Actions,
    private store: Store
  ) {}

  // Effect to persist tasks to Local Storage
  saveTasks$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(addTask, removeTask, toggleCompletion),
        withLatestFrom(this.store.select(selectTasks)),
        map(([action, tasks]) => {
          localStorage.setItem('tasks', JSON.stringify(tasks));
        })
      ),
    { dispatch: false }
    );
}