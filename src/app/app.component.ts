import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ImdbService } from './services/imdb.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), ImdbService, provideRouter(routes)],
});
