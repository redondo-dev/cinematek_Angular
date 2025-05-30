import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImdbService } from '../../services/imdb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-movies',
  imports: [FormsModule, CommonModule],
  templateUrl: './upcoming-movies.component.html',
  styleUrl: './upcoming-movies.component.css',
})
export default class UpcomingMoviesComponent {
  upcomingMovies: any[] = [];
  error: string = '';
  loading: boolean = false;

  constructor(private imdbService: ImdbService) {}

  ngOnInit(): void {
    this.loading = true;
    this.imdbService.getUpcomingMovies().subscribe({
      next: (data) => {
        this.upcomingMovies = data?.results.slice(0, 20) || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors de la récupération des films à venir.';
        console.error(err);
        this.loading = false;
      },
    });
  }
}
