// Praticamente questo è un servizio che intercetta il dato id della chiamata
// http post login ogni volta che viene passato
// e mi permette di utilizzarlo in un altro componente dove devo usarlo
//come valore della chiamata get della store procedure

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userIdSource = new BehaviorSubject(0);
  currentUserId = this.userIdSource.asObservable();

  constructor() { }

  changeUserId(id: number) {
    this.userIdSource.next(id);
    console.log(this.currentUserId)
  }
}

