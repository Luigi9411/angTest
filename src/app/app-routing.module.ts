import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AgenteComponent } from './core/agente/agente.component';
import { LoginComponent } from './core/login/login.component';
import { ClientiComponent } from './core/clienti/clienti.component';
import { ClienteComponent } from './core/cliente/cliente.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: "agente", component: AgenteComponent},
  {path: "clienti", component: ClientiComponent},
  {path: "cliente", component: ClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
