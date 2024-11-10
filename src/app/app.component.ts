import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  isOpenMenu = false;

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
}
