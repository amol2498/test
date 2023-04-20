import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector : 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  private  _productService;
  
  //#region  public variables
  pageTitle : string = 'Product List';
  imageWidth: number = 30;
  imageMargin: number = 2;
  showImage: boolean = true;
  products: IProduct[] = [];
  filteredProducts: IProduct[] =[];
  //#end region  public variables
  
  private _productFilter:string = '';
  constructor(private productService: ProductService)
  {
    this._productService = productService;
  }
  
  onNotify(message: string):void {
    this.pageTitle = 'Product List - ' + message;
  }
  get productFilter():string{
    return this._productFilter;
  }
 
  set productFilter(value:string){
    this._productFilter= value;
    this.filteredProducts = this._productService.filterProducts(this._productFilter);
    console.log("in Setter :" + value);
  }

  ngOnInit(): void { 
    console.log('TESTING On Init Function');
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }

  toggleImage(): void{
    this.showImage = !this.showImage
  }
}

