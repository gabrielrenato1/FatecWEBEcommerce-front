import { Component } from '@angular/core';
import { PedidoService } from '../../service/pedidoService/pedido-service';
import { Order } from '../../modals/order/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  public orders:Array<Order> = [];

  constructor(private orderService:PedidoService){
    this.getOrders();
  }

  public getOrders(){

    var user = JSON.parse(localStorage.getItem("auth-user")??"[]");

    this.orderService.listOrders(user.id).subscribe({
      next:(data) =>{
        console.log(data);
        this.orders = data;
      },
    });

  }

}
