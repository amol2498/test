import { Component, inject, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";

@Component({
  selector : 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  private  _productService : ProductService;
  
  //#region  public variables
  pageTitle : string = 'Product List';
  imageWidth: number = 30;
  imageMargin: number = 2;
  showImage: boolean = true;
  public products: IProduct[] = [];
  filteredProducts: IProduct[] =[];
  //#end region  public variables
  private _productFilter:string = '';
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

  onNotify(message: string):void {
    this.pageTitle = 'Product List - ' + message;
  }

  getProductList(){
     this._productService.getProductsFromAPI().subscribe(
       data => { 
        this.products = data;
        console.log('SAMARTH 2498: ', JSON.stringify(this.products));
      } 
     );
     }

  get productFilter():string{
    return this._productFilter;
  }
 
  set productFilter(value:string){
    this._productFilter= value;
    this.filteredProducts = this._productService.filterProducts(this._productFilter);
    console.log("in Setter :" + value);
  }

  
  toggleImage(): void{
    this.showImage = !this.showImage
  }
}

