import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SingleMoviesComponent } from './single-movies/single-movies.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'movie',component:MoviesComponent},
    {path:'movie/single/:id',component:SingleMoviesComponent}
];
