import { ImdbService } from './../../services/imdb.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export default class MoviesDetailsComponent implements OnInit {
  movie: any;
  error = '';
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private imdbService: ImdbService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Movie ID:', id);
    if (id) {
      this.imdbService.getMovieById(id).subscribe({
        next: (data) => {
          this.movie = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur API :', err);
          this.error = 'Erreur lors du chargement du film.';
          this.loading = false;
        },
      });
    }
  }
}
