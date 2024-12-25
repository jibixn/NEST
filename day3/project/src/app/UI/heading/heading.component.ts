import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  @Input()  data:any;
}
