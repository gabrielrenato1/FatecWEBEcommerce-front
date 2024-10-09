import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})
export class EsqueciSenhaComponent {

  public email:string = "";
  public message:string = "";

  public recuperarSenha(){

    if(this.email != ""){
      this.message = "Instruções enviadas para o email digitado";
    }else{
      this.message = "Digite um email válido";
    }
  }

}
