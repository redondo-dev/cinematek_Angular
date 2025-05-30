import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { ImdbService } from '../../../services/imdb.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

class MockImdbService {
  getPopularMovies() {
    return of({ results: [{ title: 'Movie 1' }, { title: 'Movie 2' }] });
  }

  SearchAllMovies(searchTerm: string) {
    return of({ results: [{ title: `Result for ${searchTerm}` }] });
  }
}

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let imdbService: ImdbService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent, RouterTestingModule],
      providers: [
        { provide: ImdbService, useClass: MockImdbService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    imdbService = TestBed.inject(ImdbService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load popular movies on init', () => {
    expect(component.popularMovies.length).toBe(2);
  });

  it('should search for movies', fakeAsync(() => {
    component.searchTerm = 'test';
    component.search();
    tick();
    expect(component.results.length).toBe(1);
    expect(component.results[0].title).toBe('Result for test');
  }));

  it('should display an error if search fails', fakeAsync(() => {
    spyOn(imdbService, 'SearchAllMovies').and.returnValue(throwError(() => new Error('Network Error')));
    component.searchTerm = 'error';
    component.search();
    tick();
    expect(component.error).toBe('Erreur lors de la récupération des films.');
  }));

  it('should navigate to movie detail', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToMovieDetail('123');
    expect(navigateSpy).toHaveBeenCalledWith(['/movies', '123']);
  });
});
