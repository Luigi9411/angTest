import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent implements OnInit {
  nomeAgente?: string | null;

  ngOnInit() {
    this.nomeAgente = localStorage.getItem('Nome');
  }
}

