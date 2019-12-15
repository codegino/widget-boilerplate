import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';

class Widget {
  constructor(public width: number, public height: number, public id: string) {}
}

@Component({
  selector: 'wdgt-widget-space',
  templateUrl: './widget-space.component.html',
  styleUrls: ['./widget-space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetSpaceComponent implements OnInit {
  widgets: Widget[] = [];
  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const widget: Widget = {
        id: event.previousContainer.data[event.previousIndex],
        height: 100,
        width: 100
      };
      this.widgets.push(widget);
    }
  }

  onResizeEnd(event: ResizeEvent, widget: Widget): void {
    const { height, width } = event.rectangle;
    this.widgets = this.widgets.map(it => {
      if (it.id === widget.id) {
        return {
          ...widget,
          width,
          height
        };
      }
      return it;
    });
  }

  canvasStyle(widget: Widget) {
    return {
      width: widget.width + 'px',
      height: widget.height + 'px'
    };
  }

  trackByFunction(_, item: { id: string }) {
    if (!item) {
      return null;
    }
    return item.id;
  }
}
