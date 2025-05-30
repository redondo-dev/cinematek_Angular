import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import UpcomingMoviesComponent from "../upcoming-movies/upcoming-movies.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MainComponent, UpcomingMoviesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export default class HomeComponent {}
