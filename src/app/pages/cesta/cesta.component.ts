import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modals/product/product';
import { Order } from '../../modals/order/order';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {

  public products:Array<any> = JSON.parse(localStorage.getItem("shoppingCart")??"[]");

  public removeProducts(productId:number){

    var productModal = new Product();
    productModal.removeShoppingCart(productId);
    this.products = JSON.parse(localStorage.getItem("shoppingCart")??"[]");

  }

  public updateProducts(productId:number, event:any){

    var quantity = event.target.value <= 0 ? 1 : event.target.value;

    var productModal = new Product();
    productModal.updateShoppingCart(productId, quantity);
    this.products = JSON.parse(localStorage.getItem("shoppingCart")??"[]");

  }

  public sendOrder(){

      var order = new Order();
      order.setProducts(this.products);
      
      console.log(order);

  }

}
