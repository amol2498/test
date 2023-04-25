import { ReturnStatement } from "@angular/compiler";
import { importProvidersFrom, Injectable, OnInit } from "@angular/core";
import { IProduct } from "../app/products/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, Subject, tap, throwError,shareReplay } from "rxjs";

@Injectable(
    {
        providedIn:'root'
    }
)

export class PeopleService {
    public productArr$: Observable<IProduct[]> ;
    private productApiURL = 'https://localhost:7271/product';
    // private productApiURL = './api/products/products.json';
    http: HttpClient;
    products : IProduct[] =[];
    //oldProdData: Subject<IProduct[]>;
    constructor(private _http: HttpClient){
        this.http = _http;
        this.productArr$ = this._http.get<IProduct[]>(this.productApiURL).pipe(
          shareReplay(1)
        )
        //this.oldProdData
    }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return throwError(()=>err.message)
    }

    // getPeople(){
    //   this.productArr$.subscribe(
    //     data => this.products = data
    //   );
    // }

    getProductsFromAPI(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this.productApiURL).pipe(
          catchError(this.handleError)
        );
    }
    
    
    public productList$()
    {
      return this._http.get<IProduct[]>(this.productApiURL).pipe(
        map(data=>data.values)
      )
    
    }
    

    // filterProducts(value: string): IProduct[]{
    //     return this.productArr.filter((product: IProduct) =>
    //   product.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    // }
}