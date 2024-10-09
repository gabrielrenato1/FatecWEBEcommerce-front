import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  @Output() toggleLogin = new EventEmitter<boolean>;

  public disableRegister(){
    this.toggleLogin.emit(true)
  }

}
