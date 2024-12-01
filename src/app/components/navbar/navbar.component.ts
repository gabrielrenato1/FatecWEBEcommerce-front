import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Users } from '../../modals/users/users';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public inputSearch:string = "";
  public isOpenMenu = false;
  public user:Users = new Users;

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
