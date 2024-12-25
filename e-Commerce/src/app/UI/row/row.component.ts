import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-row',
  imports: [],
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {
  @Input() data:any;
  
}
