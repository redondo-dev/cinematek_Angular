import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export default class RegisterComponent {
  nom = '';
  prenom = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private Http: HttpClient, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }
    const data = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
    };

    this.Http.post('http://localhost:3000/register', data).subscribe({
      next: (response: any) => {
        this.successMessage = 'Inscription réussie !';
        this.errorMessage = '';
        console.log(response);
        this.router.navigate(['/login']); //  redirirection après inscription
      },
      error: (Err) => {
        this.errorMessage = Err.error?.error || "Erreur lors de l'inscription";
      },
    });
  }
}
