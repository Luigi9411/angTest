import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,) { }

  canActivate(): boolean {
    if (localStorage.getItem('Nome')) {
      // Se l'utente è già loggato, reindirizza al componente agente
      this.router.navigate(['/agente']);
      return false;
    }
    return true;
  }
}
