import { Component, OnInit } from "@angular/core";
import { IProduct } from "../app/products/product";
import { ProductService } from "../app/products/product.service";
import { Observable } from "rxjs";

@Component({
  selector : 'pm-people',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit{
  private  _productService : ProductService;
  pageTitle : string = 'Product List';
  imageWidth: number = 30;
  imageMargin: number = 2;
  showImage: boolean = true;
  public products: IProduct[] = [];
  
  //#end region  public variables
  
  private sub: any;
  errMessage: any;
  constructor(private productService: ProductService)
  {
    this._productService = productService;
  }
  
   
  ngOnInit(): void { 
    console.log('TESTING On Init Function');
    this.sub = this.getProductList();
    console.log('SAMARTH 12: ', JSON.stringify(this.products));
  }

  ngOnDestroy():void
  {
    this.sub.unsubscribe();
  }
  
 

  getProductList(){
     this._productService.getProductsFromAPI().subscribe(
       data => { 
        this.products = data;
      } 
     );
  }
}


 
 
  


