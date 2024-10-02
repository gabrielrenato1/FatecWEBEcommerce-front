import { Component, Input } from '@angular/core';
import { Product } from '../../modals/product/product';
@Component({
  selector: 'product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() inputProduct:any;

  constructor(){

    // this.item = product;

    // console.log(this.item);
  }

}
