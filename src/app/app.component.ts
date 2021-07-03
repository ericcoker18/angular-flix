import { Component,OnInit } from '@angular/core';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private movieservice:MovieService){

  }
  ngOnInit(): void {
    this.searchResults = this.movieservice.GetSearchResults()
    this.movieservice.LoadMovieList()
    this.myMovieList = this.movieservice.GetMovieList()
   
  }
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';
}
