import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'wdgt-widget-space',
  templateUrl: './widget-space.component.html',
  styleUrls: ['./widget-space.component.scss']
})
export class WidgetSpaceComponent implements OnInit {
  done = [];
  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
