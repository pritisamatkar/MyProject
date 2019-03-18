import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movieList=[{"name":"lukachupi","genre":"comedy","rating":"UA","src":"\assets\movies\lukachupi.jpg"},
  {"name":"sonchiriya","genre":"thirller","rating":"A","src":"\assets\movies\sonchiriya.jpg"},{"name":"total dhamal","genre":"comedy","rating":"UA","src":"\assets\movies\total-dhamaal.jpg"},
  {"name":"gullyboy","genre":"biography","rating":"UA","src":"\assets\movies\gully-boy.jpg"},{"name":"manikarnika","genre":"biography","rating":"UA","src":"\assets\movies\manikarnika.jpg"}
];
  constructor() { }
  getMovieDetails(){
    return this.movieList;
  }
}
