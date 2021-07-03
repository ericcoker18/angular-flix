import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  SearchResults: any[] = []
  MyMovieList: any[] = []

  constructor(private apiservice: ApiService, private movieapiservice: MovieApiService) { }

  GetSearchResults(): any[] {
    return this.SearchResults
  }

  GetMovieList(): any[] {
    return this.MyMovieList
  }

  async SearchForMovies(SearchTerm:string): Promise<void> {
    const Response = await this.movieapiservice.Get(SearchTerm)
    this.SearchResults.length = 0
    this.SearchResults.push(...Response.results)

  }

  async LoadMovieList(): Promise<void> {
    const Results = await this.apiservice.Get()
    this.MyMovieList.length = 0
    this.MyMovieList.push(...Results)
  }

  async SaveToList(movie:any): Promise<void> {
    await this.apiservice.Post(movie)
    await this.LoadMovieList()
    
  }
}
