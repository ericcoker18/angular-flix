import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiUrl = "https://ce-authenticated-backend.herokuapp.com/publicapi/movies"

  constructor(private httpclient: HttpClient) { }

  Get() : Promise<any> {
    return this.httpclient.get<any>(this.ApiUrl).toPromise()
  }

  Post(movie: any) : Promise<any> {
    return this.httpclient.post<any>(this.ApiUrl, movie).toPromise()
  }
}

