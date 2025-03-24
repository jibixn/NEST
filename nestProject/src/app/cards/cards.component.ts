import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SingleMoviesComponent } from '../single-movies/single-movies.component';

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() data:any
}

