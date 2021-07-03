import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  ApiUrl = 'https://api.themoviedb.org/3/search/multi'
  ApiKey = '2d2719ace5dcb78499395440b0ec3161'

  constructor(private httpclient: HttpClient) { }

  Get(search: string): Promise<any> {
    const params: HttpParams = new HttpParams().set('api_key', this.ApiKey).set('query', search)
    return this.httpclient.get<any>(this.ApiUrl, {params}).toPromise()
  }
}
