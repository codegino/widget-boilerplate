import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSpaceComponent } from './widget-space.component';

describe('WidgetSpaceComponent', () => {
  let component: WidgetSpaceComponent;
  let fixture: ComponentFixture<WidgetSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetSpaceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
