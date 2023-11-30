import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/feature/auth.service';
import { AgenteComponent } from './core/agente/agente.component';
import { ClientiComponent } from './core/clienti/clienti.component';
import { ClienteComponent } from './core/cliente/cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AgenteComponent,
    ClientiComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
