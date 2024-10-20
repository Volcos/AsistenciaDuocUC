import { Injectable } from '@angular/core';
import { CanMatch, Router, Route, UrlSegment, GuardResult, MaybeAsync } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class CanmatchGuard implements CanMatch {
  constructor(private authService: AuthService, private router: Router) {}

  // ESTO VERIFICA QUE EL USUARIO SOLO PUEDA ACCEDER SI ESTA LOGUEADO
  canMatch(route: Route, segments: UrlSegment[]): boolean {
    if (this.authService.isLoggedIn()){
      return true;
    }else {
      this.router.navigate(['/not-found']);
      return false;
    }
  }
}

