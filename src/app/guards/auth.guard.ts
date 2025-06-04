
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,GuardResult,MaybeAsync,Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('token') === 'true';
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}



