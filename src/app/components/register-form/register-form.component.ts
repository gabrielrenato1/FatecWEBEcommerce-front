import { Component, Output, EventEmitter } from '@angular/core';
import { Users } from '../../modals/users/users';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/userService/user-service';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [FormsModule, LoadingComponent, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  @Output() toggleLogin = new EventEmitter<boolean>;
  public name:string = "";
  public email:string = "";
  public password:string = "";
  public phone:string = "";
  public cpf:string = "";
  public cep:string = "";
  public endereco:string = "";
  public adress:string = "";
  public cidade:string = "";
  public complemento:string = "";
  public estado:string = "";
  public bairro:string = "";
  public numero:string = "";
  public loading:boolean = false;

  constructor(private userService:UserService){}

  public disableRegister(){
    this.toggleLogin.emit(true)
  }

  public register(){

    this.loading = true;

    var user = new Users();

    user.name = this.name;
    user.email = this.email;
    user.password = this.password;
    user.phone = this.phone;
    user.cpf = this.cpf;
    user.cep = this.cep;
    user.endereco = this.endereco;
    user.adress = this.adress;
    user.cidade = this.cidade;
    user.complemento = this.complemento;
    user.estado = this.estado;
    user.bairro = this.bairro;
    user.numero = this.numero;
    
    console.log(user);
    this.userService.register(user).subscribe({
      next:(data) => {

      },
      error:(error) => {

      },
      complete:() => {
        this.loading = false;
      }

    });

  }

}
