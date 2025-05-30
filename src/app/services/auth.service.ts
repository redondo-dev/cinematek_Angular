import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  logout(): Observable<any> {
    return this.http.post(
      'http://localhost:3000/logout',
      {},
      { withCredentials: true }
    );
  }
}
