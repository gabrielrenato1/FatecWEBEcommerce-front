import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modals/product/product';
import { Order } from '../../modals/order/order';
import { Users } from '../../modals/users/users';
import { PedidoService } from '../../service/pedidoService/pedido-service';
import { Item } from '../../modals/item/item';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {

  public products:Array<Product> = JSON.parse(localStorage.getItem("shoppingCart")??"[]");
  public totalPrice:number = 0;
  public message:String = "";
  public loading:boolean = false;
  
  constructor(private orderService:PedidoService){
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

    this.loading = true;
    var localUser = localStorage.getItem("auth-user")??null;

    if(localUser != null){

      if(this.products.length > 0){

        var user = new Users();
        var order = new Order();

        user = JSON.parse(localUser);

        order.setProducts(this.products);
        order.cliente_id = user.id;
        order.total = this.totalPrice;

        this.orderService.createOrder(order).subscribe({
          next:(data) => {
              
              var items:Array<Item> = [];

              this.products.map(function(product){
                
                var item = new Item();
                item.cesta_id = data.codigo;
                item.produto_id = product.id;
                item.quantidade = product.quantity;
                item.valor = product.price;

                items.push(item);

              });

              this.orderService.createItems(items).subscribe({
                next:(data) => {
                  
                  localStorage.removeItem("shoppingCart");
                  this.products = [];
                  this.calculateTotalPrice();
                  this.message = "Pedido criado!";
    
                },
                error:(error) => {
                  this.message = "Algo deu errado durante a crição do pedido!";
                }
              })

          },
          error:(error) => {
            this.message = "Algo deu errado ao criar o pedido!";
          }
        });

      }else{

        this.message = "Adicione itens no carrinho!";

      }


    }else{

      this.message = "Login para continuar!";

    }

    this.loading = false;

  }

}
