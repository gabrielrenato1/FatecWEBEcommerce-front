import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modals/product/product';
import { MockProducts } from '../../mock/products/mock-products';
import { ProdutoService } from '../../service/produtoService/produto-service';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public items:Product[] = [];
  public loading:boolean = false;

  constructor(private produtoService: ProdutoService){
    
    this.loading = true;
    
    this.produtoService.list().subscribe({
      next:(data) => {
        this.items = data;
      },
      error:(err) => {
          console.log(err);
      },
      complete:() => {
        this.loading = false;  
      },
    });

  }

}
