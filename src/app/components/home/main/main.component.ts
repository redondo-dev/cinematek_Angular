import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImdbService } from '../../../services/imdb.service';
import { Router } from '@angular/router';
import UpcomingMoviesComponent from '../../upcoming-movies/upcoming-movies.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  searchTerm: string = '';
  results: any[] = [];
  popularMovies: any[] = [];
  loading: boolean = false;
  error: string = ''; 

  constructor(private imdbService: ImdbService, private router: Router) {}

  ngOnInit(): void {
    // Récupérer les films populaires lors du chargement du composant
    this.imdbService.getPopularMovies().subscribe({
      next: (data) => {
        this.popularMovies = data?.results.slice(0, 10) || []; // Limite à 10 films
      },
      error: (err) => {
        console.error(
          'Erreur lors de la récupération des films populaires :',
          err
        );
        this.error = 'Erreur lors de la récupération des films populaires.';
      },
    });
  }

  search(): void {
    this.loading = true;
    this.error = '';

    this.imdbService.SearchAllMovies(this.searchTerm).subscribe({
      next: (data) => {
        this.results = data?.results.slice(0, 10) || []; // Limite à 10 films
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des films :', err);
        this.error = 'Erreur lors de la récupération des films.';
        this.loading = false;
      },
    });
  }
  goToMovieDetail(id: string): void {
    this.router.navigate(['/movies', id]);
  }
}
