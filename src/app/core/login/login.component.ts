// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { HttpStatusCode } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   logs: CompleteForm[] = [];
//   singleNames: CompleteForm | null = null
//   showAlert = false;
//   showAlert2 = false;
//   showAlert3 = false;

//   constructor(private srv: SrvagentiService, private router: Router) {}

//   GetCredentials(usr: HTMLInputElement, pwd: HTMLInputElement) {
//     this.srv.authenticate(usr.value, pwd.value).subscribe((resp) => {
//       switch (resp.status) {
//         case HttpStatusCode.Ok:
//           this.router.navigate(['/']); // Reindirizza l'utente alla pagina "home"
//           break;
//           case HttpStatusCode.NoContent:
//           this.showAlertMessage();
//         break;

//       }
//     }, (error) => {
//       // Handle HTTP request errors here.
//       //Qui sto gestendo le risposte http di errore
//       //se è bad request vuol dire che le credenziali non matchano
//       //se è not found vuol dire che esiste nella tabella vecchia ma non in quella nuova
//       if(error.status == HttpStatusCode.BadRequest){
//         this.showAlertMessage2('message 1')
//       } else if (error.status == HttpStatusCode.NotFound) {
//         this.showAlertMessage2('message 2')
//       }
//     }
//     );
//   }

//   InsertForm(frm: NgForm) {
//     this.logs.push(frm.value);
//   }

//   showAlertMessage() {
//     this.showAlert = true;
//     setTimeout(() => {
//       this.showAlert = false;
//       this.router.navigate(['/']);
//     }, 1000);
//   }

//   showAlertMessage2(message: string) {
//     if(message == 'message 1'){
//       this.showAlert2 = true;
//       setTimeout(() => {
//         this.showAlert2 = false;
//       }, 1000);
//     }else if (message == 'message 2') {
//       this.showAlert3 = true;
//       setTimeout(() => {
//         this.showAlert3 = false;
//       }, 1000);
//     }
//   }

// }

// export interface CompleteForm {
//   emailAddress: string;
//   password: string;
// }

import { Component } from '@angular/core';
import { AuthService } from 'src/app/feature/auth.service'; // Aggiorna con il percorso corretto
import { UserService } from 'src/app/feature/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe((response: any) => {
        if (response.Id !== 0) {
            console.log('Accesso consentito');
             // Salva l'ID dell'utente nel servizio user
             this.userService.changeUserId(response.id);
             localStorage.setItem('Nome', response.nomeAgente);
            //  manda al componente agente
             this.router.navigate(['/agente']);
        } else if (response.Id == 0) {
            console.log('Accesso negato');
        }
    }, (error) => {
        if (error.status === 401) {
            console.log('Accesso non consentito');
        } else {
            console.log('Errore durante l\'autenticazione', error);
        }
    });
}

onLogout() {
  // Rimuovi tutti i dati dal localStorage
  localStorage.clear();
  // Naviga al componente di login
  this.router.navigate(['/login']);
}

}


