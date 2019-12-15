import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { WidgetActionTypes, WidgetActions } from './widget.actions';

@Injectable()
export class WidgetEffects {
  @Effect()
  loadWidgets$ = this.actions$.pipe(
    ofType(WidgetActionTypes.LoadWidgets),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );

  constructor(private actions$: Actions<WidgetActions>) {}
}
