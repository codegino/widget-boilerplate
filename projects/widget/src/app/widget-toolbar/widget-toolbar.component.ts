import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'wdgt-widget-toolbar',
  templateUrl: './widget-toolbar.component.html',
  styleUrls: ['./widget-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetToolbarComponent {
  availableWidgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];
}
