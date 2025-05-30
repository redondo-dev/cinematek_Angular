import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface utilisateur
export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; // URL de ton API backend

  constructor(private http: HttpClient) {}

  // Récupérer la liste des utilisateurs
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
