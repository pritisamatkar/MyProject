import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../movies.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList=[{"name":"badla","genre":"crime","rating":"UA","src":"../assets/movies/badla.jpg"},{"name":"lukachupi","genre":"comedy","rating":"UA","src":"../assets/movies/lukachupi.jpg"},
  {"name":"sonchiriya","genre":"thirller","rating":"A","src":"../assets/movies/sonchiriya.jpg"},{"name":"total dhamal","genre":"comedy","rating":"UA","src":"../assets/movies/total-dhamaal.jpg"},
  {"name":"gullyboy","genre":"biography","rating":"UA","src":"../assets/movies/gully-boy.jpg"},{"name":"manikarnika","genre":"biography","rating":"UA","src":"../assets/movies/manikarnika.jpg"}
];

  constructor(private MoviesService:MoviesService) {
    
   }
  
  ngOnInit() {
    
  }
 
}
