import { Component } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
