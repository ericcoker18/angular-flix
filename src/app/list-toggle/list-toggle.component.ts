import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-list-toggle',
  templateUrl: './list-toggle.component.html',
  styleUrls: ['./list-toggle.component.css']
})
export class ListToggleComponent implements OnInit {
  @Input() movie;
  constructor(private movieservice: MovieService) { }

  ngOnInit() {
  }
  saveMovieToList(){
    this.movieservice.SaveToList(this.movie)
  }

}
