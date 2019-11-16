import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/product.service';
import { Product } from '../core/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductService) {   
    
  }

  ngOnInit() {
    // this.product = {
    //   id: "1",
    //   name: "name",
    //   description: "desc"
    // };

    this.service.getAll()
      .subscribe(p => {
        this.products = p
      });
  }
}