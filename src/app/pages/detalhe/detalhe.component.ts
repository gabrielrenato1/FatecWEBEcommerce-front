import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../modals/product/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {

  public product:Product = new Product();
  private productId:any = null;

  constructor(private route: ActivatedRoute){

    this.route.paramMap.subscribe(params => {
     this.productId = params.get('id') || 0;
    });

    this.product.id = this.productId;
    this.product.name = "Produto " + this.productId;
    this.product.image = "https://placehold.co/1920x1200/000000/FFF?text=Foto Produto " + this.productId;
    this.product.description = "Descrição do produto " + this.productId;
    this.product.price = 100.00 * this.productId;
    this.product.discount = 0.0;

  }

  public addShoppingCart(){

    var tes = localStorage.getItem("shoppingCart");

    if(tes === null){

      // localStorage.setItem("shoppingCart", JSON.stringify(this.product));

    }
    console.log(JSON.stringify(tes));

  }

}
