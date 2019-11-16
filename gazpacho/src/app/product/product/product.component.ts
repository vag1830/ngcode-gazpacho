import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../core/product.service';
import { Product } from '../core/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  ngOnInit() {

  }

}