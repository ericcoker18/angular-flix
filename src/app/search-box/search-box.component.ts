import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private movieservice: MovieService) { }

  ngOnInit() {
  }
  loadSearch(e){
    this.movieservice.SearchForMovies(e.target.value)
  }

}
