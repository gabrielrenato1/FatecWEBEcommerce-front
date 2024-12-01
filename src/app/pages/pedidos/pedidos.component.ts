import { Component } from '@angular/core';
import { PedidoService } from '../../service/pedidoService/pedido-service';
import { Order } from '../../modals/order/order';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  public orders:Array<Order> = [];
  public loading:boolean = false;

  constructor(private orderService:PedidoService){
    this.getOrders();
  }

  public getOrders(){

    this.loading = true;
    var user = JSON.parse(localStorage.getItem("auth-user")??"[]");

    this.orderService.listOrders(user.id).subscribe({
      next:(data) =>{
        this.orders = data;
        console.log(this.orders);
      },
      error:(error) => {
        
      },
      complete:() => {
        this.loading = false;
      }
    });

  }

  public toggleDiv(orderId:number){

    var div = document.getElementById("myDiv"+orderId);

    if(div !== null){

      div.classList.toggle("show");
      
      if (div.classList.contains("show")) {
          div.style.display = "block";
      } else {
          div.style.display = "none";
      }

    }

  }

}
