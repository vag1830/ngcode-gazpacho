import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Product } from './product';


@Injectable()
export class ProductService {

    private _baseUrl: string = "http://localhost:57944/api";

	constructor(
		private httpClient: HttpClient
	) {
		
	}

	getAll(): Observable<Product[]> {
		return this.httpClient.get<Product[]>(`${this._baseUrl}/products`);	
	}

	getById(productId: string): Observable<Product> {
        return this.httpClient.get<Product>(`${this._baseUrl}/products/${productId}`);
	}
}