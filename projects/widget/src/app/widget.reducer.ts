import { WidgetActions, WidgetActionTypes } from './widget.actions';

export const widgetFeatureKey = 'widget';

// tslint:disable-next-line: no-empty-interface
export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: WidgetActions): State {
  switch (action.type) {
    case WidgetActionTypes.LoadWidgets:
      return state;

    default:
      return state;
  }
}
