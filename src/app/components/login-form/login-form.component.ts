import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Users } from '../../modals/users/users';
import { UserService } from '../../service/userService/user-service';

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
  public message:any = null;
  
  constructor(private userService:UserService){}

  public disableLogin(){
    this.toggleLogin.emit(false)
  }

  public login(){

    var user = new Users();
    
    user.email = this.email;
    user.password = this.password;

    this.userService.login(user).subscribe({
      next:(data)=>{
        if(data === null){
          this.message = "Usuário ou senha não válidos"; 
        }else{
          localStorage.setItem("auth-user", JSON.stringify(data));
          window.location.href = '/';
        }
      },
      error:(err)=>{
        this.message = "Usuário ou senha não válidos"; 
      }
    });

  }

}
