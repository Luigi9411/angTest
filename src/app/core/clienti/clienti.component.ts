import { Component } from '@angular/core';
import { AuthService } from 'src/app/feature/auth.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent {
  term: string= '';
  clientiList: Clienti[] = [];
  clienteDetails?: Cliente;

  constructor(private authService: AuthService) { }

  onSearch(): void {
    this.authService.searchClient(this.term).subscribe(results => {
      this.clientiList = results; // Aggiorna la lista dei clienti con i risultati della ricerca
    });
  }

  // modifica il parametro clienteDetails in AuthService con i dati variati ogni volta dalla chiamata http usata in questo metodo
  onClientClick(idAgente: string) {
    this.authService.getClientDetails(idAgente).subscribe(results => {
      this.authService.clienteDetails.next(results);
    });
  }



}

export interface Clienti {
  ragionesociale: string;
  idAgente?: number;
}

export interface Cliente {
  ragionesociale: string;
  idAgente?: number;
  indirizzo?: string;
  cap?: string;
  citta?: string;
  prov?: string;
}






