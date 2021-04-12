import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable()
export class PopularService{
  //movies:Observable<any> = this.http.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9198fa6d9a9713bc6b03ee9582525917");

    discoverPopular(page:number):Observable<any>{
        return this.http.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page+1}&api_key=9198fa6d9a9713bc6b03ee9582525917`);
    }
    
    searchForMovies(query:string, page:number):Observable<any>{
        return this.http.get(`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&query=${query}&page=${page+1}&api_key=9198fa6d9a9713bc6b03ee9582525917`);
    }

    getGenres():Observable<any>{
        return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=9198fa6d9a9713bc6b03ee9582525917");
    }

    constructor (private http: HttpClient){

    }

}