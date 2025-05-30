import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  private loadUsers(): void {
    this.loading = true;
    this.error = null;

    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
        console.log('Utilisateurs chargés:', data);
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
        console.error('Erreur lors du chargement des utilisateurs:', error);
      },
    });
  }
}
