import { Component, OnInit } from "@angular/core";
import { IProduct } from "../app/products/product";
import {PeopleService} from "./people.service";
import { Observable, Subject } from "rxjs";

@Component({
  // selector : 'pm-people',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit{
  //private  _productService : ProductService;
  pageTitle : string = 'Product List';
  imageWidth: number = 30;
  imageMargin: number = 2;
  showImage: boolean = true;
  public products: IProduct[] = [];
  filteredProducts: IProduct[] =[];
  private _productFilter:string = '';
  
  private sub: any;
  errMessage: any;
  constructor(private _peopleService: PeopleService)
  {
    
  }
  
   
  ngOnInit(): void { 
    console.log('TESTING On Init Function');
    this._peopleService.productArr$.subscribe(
      data =>
      { 
        //console.log("jlajlafjalfcla : ", JSON.stringify(data));
        this.filteredProducts = data;
        this.products = data;
      }
    );

    
  }

  // ngOnDestroy():void
  // {
  //   this.sub.unsubscribe();
  // }
  
  get productFilter():string{
    return this._productFilter;
  }
 
  set productFilter(value:string)
  {
    this._productFilter=  value;
    this._peopleService.productArr$.subscribe( data =>
      {
        this.filteredProducts = data.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        console.log("SRIPAD 2498 -- ", JSON.stringify(this.filteredProducts));
      }
    )
    // this.filteredProducts = [{"productId":2,"productName":"Garden Cart","productCode":"GDN-0023","releaseDate":"March 18, 2021","description":"15 gallon capacity rolling garden cart","price":32.99,"starRating":4.2,"imageUrl":"./assets/images/garden_cart.png"}]
    console.log("SRIPAD 2498 -- ", JSON.stringify(this.filteredProducts));
  }

  
}