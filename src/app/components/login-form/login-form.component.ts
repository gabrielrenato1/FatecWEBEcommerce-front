import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() toggleLogin = new EventEmitter<boolean>;

  public disableLogin(){
    this.toggleLogin.emit(false)
  }

  public login(event:any){
    console.log(event)

  }

}
