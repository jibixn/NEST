import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './UI/card/card.component';

export const routes: Routes = [
    {path : '',component:HomeComponent},
    {path : 'card',component:CardComponent},
    {path:'**',component:HomeComponent},

];
