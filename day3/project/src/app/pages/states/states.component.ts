import { Component } from '@angular/core';
import { HeadingComponent } from "../../UI/heading/heading.component";
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { PlaceholderBoxComponent } from "../../UI/placeholder-box/placeholder-box.component";
import { ContainerBoxComponent } from "../../UI/container-box/container-box.component";
import { CardComponent } from '../../UI/card/card.component';
import { Video2Component } from "../../UI/video2/video2.component";
import { ApiService } from '../../UI/api.service';

@Component({
  selector: 'app-states',
  imports: [HeadingComponent, PlaceholderBoxComponent, ContainerBoxComponent, CardComponent, Video2Component],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {
  headingTags = ["STATES"]
  states:any;
  constructor(public api:ApiService){}
  ngOnInit(): void {
    this.states = this.api.getStates();
  }
}
