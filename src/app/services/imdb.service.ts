import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private apiURL = 'https://imdb-movies-shows-persons-api.p.rapidapi.com';

  private headers = new HttpHeaders({
    'x-rapidapi-key': 'f56eca63f6mshe7a786ba8e2eb2dp1f6f0ejsn51db271d413d',
    // 'x-rapidapi-key': '158ceaca3amsh441a2de7ac9cf0dp166a0bjsn7aa88662a5a1',
    'x-rapidapi-host': 'imdb-movies-shows-persons-api.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  SearchAllMovies(query: string): Observable<any> {
    const url = `${this.apiURL}/search/all?query=${encodeURIComponent(query)}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  getMovieById(id: string): Observable<any> {
    const url = `${this.apiURL}/movies/id/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  getUpcomingMovies(): Observable<any> {
    const url = `${this.apiURL}/movies/upcoming`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  getPopularMovies(): Observable<any> {
    const url = `${this.apiURL}/movies/popular`;
    return this.http.get<any>(url, { headers: this.headers });
  }
}
