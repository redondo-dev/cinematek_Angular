import { TestBed, ComponentFixture } from '@angular/core/testing';
import 'jasmine'; // Ensure Jasmine matchers are available
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ImdbService } from './services/imdb.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],  // ✅ Utiliser "imports" car composant autonome
      providers: [
        provideHttpClient(),    // ✅ Fournir le client HTTP
        provideRouter(routes),  // ✅ Fournir le routeur
        ImdbService             // ✅ Fournir le service ImdbService
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the component', () => {
  //   expect(component).toBeTruthy();
  // });
});
