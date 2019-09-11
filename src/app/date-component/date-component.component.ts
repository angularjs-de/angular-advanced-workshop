import { Component } from '@angular/core';

@Component({
  selector: 'ws-date-component',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.scss']
})
export class DateComponentComponent {
  public today: number = Date.now();
}
