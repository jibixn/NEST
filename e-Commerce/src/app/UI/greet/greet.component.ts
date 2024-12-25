import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  imports: [],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.scss'
})
export class GreetComponent {
  @Input() data:any;
}
