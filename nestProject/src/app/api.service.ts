import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   getMovies() {

    let data= this.http.get('https://dummyapi.online/api/movies');
    return data;
  }
  
  getMoviesById(ids: any) {
    return this.http.get('https://dummyapi.online/api/movies/'+ids);
  }
  
  
}

