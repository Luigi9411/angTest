import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Clienti } from 'src/app/core/clienti/clienti.component'; // Aggiorna con il percorso corretto



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7234/api/Agentis';
  private apiUrl2 = 'https://localhost:7234/api/Clientis';
  private apiUrl3 = 'https://localhost:7234/api/Clientis';
  private currentUserId?: number; // parametro ottenuto dal servizio user


  constructor(private http: HttpClient, private userService: UserService) {
    this.userService.currentUserId.subscribe(id => this.currentUserId = id);
}

  login(username: string, password: string) {
    // url quando si usa una store procedure gli passiamo i parametri in questo modo
    const url = `${this.apiUrl}?userId=${username}&password=${password}`;
    return this.http.post(url, {});
  }

  // metodo che ricerca i clienti usando id degli agenti ottenuto dal metodo post
  //  e la ragione sociale inserita dagli utenti nella searchbar
  searchClient(term: string): Observable<Clienti[]> {
    let agenteId = this.currentUserId ? this.currentUserId.toString() : '';
    return this.http.get<Clienti[]>(`${this.apiUrl2}?ricercato=${term}&id_agente=${agenteId}`);
  }

  searchClient2(term: string): Observable<Clienti2[]> {
    let agenteId = this.currentUserId ? this.currentUserId.toString() : '';
    return this.http.get<Clienti2[]>(`${this.apiUrl2}?ricercato=${term}&id_agente=${agenteId}`);
  }

}
