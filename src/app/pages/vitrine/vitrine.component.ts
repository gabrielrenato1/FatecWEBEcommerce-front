import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {

  public items = [1,2,3,4,5,6,7,8,9];

}
