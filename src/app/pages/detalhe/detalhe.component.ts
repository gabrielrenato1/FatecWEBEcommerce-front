import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../modals/product/product';
import { ActivatedRoute } from '@angular/router';
import { MockProducts } from '../../mock/products/mock-products';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoService } from '../../service/produtoService/produto-service';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [ProductCardComponent, FormsModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {

  public product:Product = new Product();
  private productId:any = null;

  constructor(private route: ActivatedRoute, private productService: ProdutoService){

    this.route.paramMap.subscribe(params => {
     this.productId = params.get('id') || 0;
    });


    productService.show(this.productId).subscribe({
      next:(data)=>{
        this.product =  Object.assign(new Product(), data);
      },
      error:(err)=>{
          console.log(err);
      }
    });

  }

}
