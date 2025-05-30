import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  movieId: number = 1;
  searchTerm: string = '';

  constructor(public auth: AuthService, private router: Router) {}

  search(): void {
    console.log('Searching for:', this.searchTerm);
  }

  logout() {
    console.log('Déconnexion déclenchée');
    this.auth.logout().subscribe({
      next: () => {
        console.log('Déconnexion réussie, redirection...');

        // Redirection après logout réussi
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erreur lors du logout', err);
      },
    });
  }
}
