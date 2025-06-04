import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export default class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http
      .post(
        'http://localhost:3000/login',
        {
          email: this.email,
          password: this.password,
        },
        { withCredentials: true }
      )
      .subscribe({
        next: (res: any) => {
          console.log('conexion reussie');
          localStorage.setItem('token', 'true');
          this.router.navigate(['/home']);
        },
        error: (err: any) => {
          console.error(err);
          alert('mail ou mot de pass invalid');
        },
      });
  }
}
