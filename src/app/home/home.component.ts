import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList=[{"name":"badla","genre":"crime","rating":"UA","src":"../assets/movies/badla.jpg"},{"name":"lukachupi","genre":"comedy","rating":"UA","src":"../assets/movies/lukachupi.jpg"},
  {"name":"sonchiriya","genre":"thirller","rating":"A","src":"../assets/movies/sonchiriya.jpg"},{"name":"total dhamal","genre":"comedy","rating":"UA","src":"../assets/movies/total-dhamaal.jpg"},
  {"name":"gullyboy","genre":"biography","rating":"UA","src":"../assets/movies/gully-boy.jpg"},{"name":"manikarnika","genre":"biography","rating":"UA","src":"../assets/movies/manikarnika.jpg"}
];
playsList=[{"name":"rambo circus","venue":"pwd ground","date":"9 march","src":"../assets/events/rambo.jpg"},
{"name":"holi bash","venue":"amnora mall pune","date":"21 march","src":"../assets/events/holi-sunburn.jpg"},
{"name":"Color Fest","venue":"orchid hotel pune","date":"21 march","src":"../assets/events/pune-colour.jpg"}
];
  constructor() { }

  ngOnInit() {
  }

}
