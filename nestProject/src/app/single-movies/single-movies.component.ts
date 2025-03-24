import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single-movies',
  imports: [RouterLink],
  templateUrl: './single-movies.component.html',
  styleUrl: './single-movies.component.css'
})
export class SingleMoviesComponent {
  constructor(private activated: ActivatedRoute,private api:ApiService){
  
  }

  data:any;
  ngOnInit():void{
    let id = this.activated.snapshot.paramMap.get("id");

    this.api.getMoviesById(id).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      

    });
  }

}
