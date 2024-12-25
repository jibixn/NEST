import { Component, Input } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data : any;
  constructor(private router: Router) {}
  selectState(){
    
      this.router.navigate(['/current']);
    
  }
}
