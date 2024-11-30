import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../../modals/order/order";
import { Item } from "../../modals/item/item";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {

    constructor(private http : HttpClient) { }

    createOrder(order:Order): Observable<any>{
        return this.http.post("http://localhost:8080/api/cesta", order);
    }

    listOrders(userId:number): Observable<any>{
        return this.http.get("http://localhost:8080/api/cesta/cliente/" + userId);
    }

    createItems(items:Array<Item>): Observable<any>{
        return this.http.post("http://localhost:8080/api/item", items);
    }
}
