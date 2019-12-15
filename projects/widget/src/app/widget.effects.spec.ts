import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WidgetEffects } from './widget.effects';

describe('WidgetEffects', () => {
  const actions$: Observable<any> = null;
  let effects: WidgetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<WidgetEffects>(WidgetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
