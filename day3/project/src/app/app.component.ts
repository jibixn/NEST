import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./UI/navbar/navbar.component";
import { CardComponent } from "./UI/card/card.component";
import { VideoComponent } from "./UI/video/video.component";
import { LogoGreetComponent } from "./UI/logo-greet/logo-greet.component";
import { CarouselComponent } from "./UI/carousel/carousel.component";
import { HeadingComponent } from "./UI/heading/heading.component";
import { ButtonComponent } from "./UI/button/button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  headingTags = ["VISIT STATES"]
  buttonTags = ["States->"]
  
  

constructor(private router: Router) {}




}



