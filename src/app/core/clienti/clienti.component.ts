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

  constructor(private authService: AuthService) { }

  onSearch(): void {
    this.authService.searchClient(this.term).subscribe(results => {
      this.clientiList = results; // Aggiorna la lista dei clienti con i risultati della ricerca
    });
  }

}

export interface Clienti {
  ragionesociale: string;
  idAgente?: number;
}
