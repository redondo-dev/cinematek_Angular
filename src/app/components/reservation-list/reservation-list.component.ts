import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '@app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export default class ReservationListComponent {
  name = '';
  user_id = 0;
  film_id = 0;
  date = '';
  seats = 1;
  status = 'pending';

  films: any[] = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'Interstellar' },
  ];

  users: any[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  constructor(private reservationService: ReservationService) {}

  onReserve() {
    if (
      this.name &&
      this.user_id > 0 &&
      this.film_id > 0 &&
      this.date &&
      this.seats > 0
    ) {
      const reservation = {
        name: this.name,
        user_id: this.user_id,
        film_id: this.film_id,
        date: this.date,
        seats: this.seats,
        status: this.status,
      };

      this.reservationService.addReservation(reservation).subscribe({
        next: () => {
          alert('Réservation ajoutée avec succès');
          this.name = '';
          this.user_id = 0;
          this.film_id = 0;
          this.date = '';
          this.seats = 1;
          this.status = 'pending';
        },
        error: (err) => {
          console.error("Erreur lors de l'ajout de la réservation", err);
          alert('Erreur lors de la réservation');
        },
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
