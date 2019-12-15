import { Action } from '@ngrx/store';

export enum WidgetActionTypes {
  LoadWidgets = '[Widget] Load Widgets'
}

export class LoadWidgets implements Action {
  readonly type = WidgetActionTypes.LoadWidgets;
}

export type WidgetActions = LoadWidgets;
