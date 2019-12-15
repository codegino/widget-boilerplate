import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wdgt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'widget';
}
