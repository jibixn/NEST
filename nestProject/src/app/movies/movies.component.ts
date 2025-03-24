import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-movies',
  imports: [CardsComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private api:ApiService){}
  datas: any
  
  ngOnInit(){
    this.api.getMovies().subscribe((res:any)=>{
      this.datas=res;
      console.log(this.datas)
    });
}
}


