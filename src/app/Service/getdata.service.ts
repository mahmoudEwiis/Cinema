
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _HttpClient:HttpClient) {
  }
  getData(media_type , number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media_type}/day?api_key=d9ff7466094abb3e03e2e85b479230a9&page=`+number);
  }
  getMovieDetails(movie):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3${movie}?api_key=d9ff7466094abb3e03e2e85b479230a9&language=en-US`);
  }
  getMovieTrailer(movie):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3${movie}/videos?api_key=d9ff7466094abb3e03e2e85b479230a9&language=en-US`);
  }
}
