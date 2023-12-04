import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/feature/auth.service';
import { Cliente } from '../clienti/clienti.component'; // Importo l'interfaccia Cliente

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clienteDetails: Cliente | null = null; // variabile contenente i dati dell'interfaccia cliente

  constructor(private authService: AuthService) { }

 //metodo che fa variare sempre i dati di clienteDetails al variare dei dati di clienteDetails nel servizio AuthService
  ngOnInit() {
    this.authService.clienteDetails.subscribe(cliente => {
      this.clienteDetails = cliente;
    });
  }
}

