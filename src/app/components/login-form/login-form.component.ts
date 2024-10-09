import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [LoginComponent, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() toggleLogin = new EventEmitter<boolean>;
  public email:string = "";
  public password:string = "";
  public message:string = "";

  public disableLogin(){
    this.toggleLogin.emit(false)
  }

  public login(){
    
    if((this.email == "fatec@fatec.com" && this.password == "12345")){
      window.location.href = '/';
    }else{
      this.message = "Usuário ou senha não válidos";

    }

  }

}
