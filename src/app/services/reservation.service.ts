import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/reservations';

  constructor(private http: HttpClient) {}

  addReservation(reservation: {
    name: string;
    user_id: number;
    film_id: number;
    date: string;
    seats: number;
    status?: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, reservation);
  }

  getReservations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateReservation(id: number, reservation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, reservation);
  }
}
