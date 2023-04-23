import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";

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
    }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return throwError(()=>err.message)
    }

    // getProducts(): IProduct[]{
    //     this.productArr = 
    //     [
    //         {
    //           "productId": 1,
    //           "productName": "Leaf Rake",
    //           "productCode": "GDN-0011",
    //           "releaseDate": "March 19, 2021",
    //           "description": "Leaf rake with 48-inch wooden handle.",
    //           "price": 19.95,
    //           "starRating": 3.2,
    //           "imageUrl": 'assets\images\leaf_rake.png'
    //         },
    //         {
    //           "productId": 2,
    //           "productName": "Garden Cart",
    //           "productCode": "GDN-0023",
    //           "releaseDate": "March 18, 2021",
    //           "description": "15 gallon capacity rolling garden cart",
    //           "price": 32.99,
    //           "starRating": 4.2,
    //           "imageUrl": "assets/images/garden_cart.png"
    //         },
    //         {
    //           "productId": 5,
    //           "productName": "Hammer",
    //           "productCode": "TBX-0048",
    //           "releaseDate": "May 21, 2021",
    //           "description": "Curved claw steel hammer",
    //           "price": 8.9,
    //           "starRating": 4.8,
    //           "imageUrl": "assets/images/hammer.png"
    //         },
    //         {
    //           "productId": 8,
    //           "productName": "Saw",
    //           "productCode": "TBX-0022",
    //           "releaseDate": "May 15, 2021",
    //           "description": "15-inch steel blade hand saw",
    //           "price": 11.55,
    //           "starRating": 3.7,
    //           "imageUrl": "assets/images/saw.png"
    //         },
    //         {
    //           "productId": 10,
    //           "productName": "Video Game Controller",
    //           "productCode": "GMG-0042",
    //           "releaseDate": "October 15, 2020",
    //           "description": "Standard two-button video game controller",
    //           "price": 35.95,
    //           "starRating": 4.6,
    //           "imageUrl": "assets/images/xbox-controller.png"
    //         }
    //       ]
    //     return this.productArr;
    // }

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