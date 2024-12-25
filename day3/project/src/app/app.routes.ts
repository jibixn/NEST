import { Routes } from '@angular/router';
import { StatesComponent } from './pages/states/states.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { CurrentStateComponent } from './pages/current-state/current-state.component';
export const routes: Routes = [
    {path : '',component:HomeComponent},
    {path: 'statesPage', component: StatesComponent},
    {path:'statesPage/:id',component:CurrentStateComponent},
    {path:'**',component:NotFoundComponent},
];
