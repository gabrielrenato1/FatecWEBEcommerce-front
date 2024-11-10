import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modals/product/product';
import { MockProducts } from '../../mock/products/mock-products';
import { ProdutoService } from '../../service/produtoService/produto-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public items:any = null;

  constructor(private produtoService: ProdutoService){

     this.produtoService.list().subscribe({
      next:(data)=>{

        for (let index = 0; index < data.length; index++) {
          data[index] = Object.assign(new Product(), data[index]) 
        }

        this.items = data;
      },
      error:(err)=>{
          console.log(err);
      }
    });

  }

}
