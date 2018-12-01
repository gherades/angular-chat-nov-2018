import { UsersService } from './services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  messages = [];
  users;

  /**
   * Constructor de app component, inyectando como 
   * dependencia nuestro user service
   * @param usersService : Servicio parar recuperar usuarios
   */
  constructor(private usersService: UsersService) {

    /**
     * Subscripción al método getUsers para recuperar los usuarios
     */
    this.users = this.usersService.getUsers();
  }

  sayHi(valor) {
    this.messages.push({...valor});
  }
}
