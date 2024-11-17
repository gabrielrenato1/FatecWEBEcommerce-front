import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from './modals/users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  isOpenMenu = false;
  public user:Users = new Users;
  public inputSearch:string = "";

  constructor(private router:Router){

    this.setUser();

  }

  setUser(){

    var user = localStorage.getItem("auth-user")??null;
    this.user = (user != null) ? JSON.parse(user) : new Users;

  }

   toggleMenu(){

    var navItem = document.querySelector("nav");
    var contentItem = document.getElementById('content-wrap');

    if(navItem !== null && contentItem !== null){
    
      if(window.matchMedia("(orientation: portrait)").matches){
        navItem.style.left = this.isOpenMenu ? "-86vw" : "0vw";
      }else{
        navItem.style.left = this.isOpenMenu ? "-15vw" : "0vw";
        contentItem.style.width = this.isOpenMenu ? "100vw" : "85vw";
        contentItem.style.marginLeft = this.isOpenMenu ? "0px" : "15vw";
      }
      
      this.isOpenMenu = !this.isOpenMenu;
    
    }

  }

  searchProduct(){
    if(this.inputSearch != ""){
      this.router.navigateByUrl('resultados?pesquisa='+this.inputSearch);
    }
  }

  logout(){

    var user = localStorage.getItem("auth-user")??null;

    if(user != null){
      localStorage.removeItem("auth-user");
      this.setUser()
    }
    
  }

}
