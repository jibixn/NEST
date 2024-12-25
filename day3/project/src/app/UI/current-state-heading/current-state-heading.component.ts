import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-current-state-heading',
  imports: [],
  templateUrl: './current-state-heading.component.html',
  styleUrl: './current-state-heading.component.scss'
})
export class CurrentStateHeadingComponent {
  @Input() data:any;
  // ngOnInit() {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   console.log(this.data.name)
  // }
}
