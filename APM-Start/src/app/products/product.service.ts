import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError, toArray } from "rxjs";

@Injectable(
    {
        providedIn:'root'
    }
)

export class ProductService{
    productArr: IProduct[] = [];
    private productApiURL = 'https://localhost:7271/product';
    // private productApiURL = './api/products/products.json';
    http: HttpClient;

    constructor(private _http: HttpClient){
        this.http = _http;
        //this.productArr = this.getProductsFromAPI()
    }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return throwError(()=>err.message)
    }


    getProductsFromAPI(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this.productApiURL).pipe(
          catchError(this.handleError)
        );
    }

    filterProducts(value: string): IProduct[]{
        return this.productArr.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }
}