import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo-greet',
  imports: [],
  templateUrl: './logo-greet.component.html',
  styleUrl: './logo-greet.component.scss'
})
export class LogoGreetComponent {
  @Input()  data:any;
}
