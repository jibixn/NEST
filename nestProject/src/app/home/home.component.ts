import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
