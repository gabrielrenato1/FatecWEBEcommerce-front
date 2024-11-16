import { Component } from '@angular/core';
import { Product } from '../../modals/product/product';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../service/produtoService/produto-service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MockProducts } from '../../mock/products/mock-products';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent {

  public items:Product[] = [];

  constructor(private route:ActivatedRoute, private productService:ProdutoService){
    this.getProducts();
  }

  getProducts(){

    var searchQuery = null;

    this.route.queryParams.subscribe((data) =>{
      searchQuery = data?.['pesquisa'];
        this.productService.search(searchQuery).subscribe({
          next:(data)=>{
            this.items = data;
          },
          error:(err)=>{
              console.log(err);
          }
      })
    })

    

  }

}
