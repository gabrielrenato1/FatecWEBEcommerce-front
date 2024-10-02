import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../modals/product/product';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {

  public items:any = [];

  constructor(){

    for (let index = 15; index <= 30; index++) {
      
        var product = new Product();

        product.id = index;
        product.name = "Produto " + index;
        product.image = "https://placehold.co/1920x1200/000000/FFF?text=Foto Produto " + index;
        product.description = "Descrição do produto " + index;
        product.price = 100.00 * index;
        product.discount = 0.0;

        this.items.push(product);
      
    }

    // console.log(this.items);

  }

}
