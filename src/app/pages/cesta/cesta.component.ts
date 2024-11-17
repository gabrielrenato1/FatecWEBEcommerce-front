import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modals/product/product';
import { Order } from '../../modals/order/order';
import { Users } from '../../modals/users/users';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {

  public products:Array<any> = JSON.parse(localStorage.getItem("shoppingCart")??"[]");
  public totalPrice:number = 0;
  
  constructor(){
    this.calculateTotalPrice();
  }

  private calculateTotalPrice(){

    var total:number = 0;

    this.products.map(function(product){
      total += product.price * product.quantity;  
    })

    this.totalPrice = total;

  }

  public removeProducts(productId:number){

    var productModal = new Product();
    productModal.removeShoppingCart(productId);
    this.products = JSON.parse(localStorage.getItem("shoppingCart")??"[]");

    this.calculateTotalPrice();

  }

  public updateProducts(productId:number, event:any){

    var quantity = event.target.value <= 0 ? 1 : event.target.value;

    var productModal = new Product();
    productModal.updateShoppingCart(productId, quantity);
    this.products = JSON.parse(localStorage.getItem("shoppingCart")??"[]");

    this.calculateTotalPrice();

  }

  public sendOrder(){

    var localUser = localStorage.getItem("auth-user")??null;

    if(localUser != null){

      if(this.products.length > 0){

        var user = new Users();
        var order = new Order();

        user = JSON.parse(localUser);

        order.setProducts(this.products);
        order.user_id = user.id;
        localStorage.setItem("shoppingCart", "[]");
        this.products = JSON.parse(localStorage.getItem("shoppingCart")??"[]");
        
        this.calculateTotalPrice();



      }else{

        console.log("Adicione itens no carrinho");

      }


    }else{

      console.log("Login para continuar");

    }

    
    

  }

}
