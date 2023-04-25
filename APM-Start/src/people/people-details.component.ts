import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/products/product';
import { PeopleService } from './people.service';

@Component({
  // selector: 'pm-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  pageTitle: string = 'Product Details'
  constructor(private router: Router, private route: ActivatedRoute, private _peopleService: PeopleService) 
  { 
    
  }
  products: IProduct[]=[];
  product: IProduct | undefined; 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this._peopleService.productArr$.subscribe( data =>
      {
        this.products = data.filter((product: IProduct) =>
        product.productId == Number(id));
        this.product = this.products[0];
        // console.log("SRIPAD 2498 -- ", JSON.stringify(this.filteredProducts));
      }
    );
  }

  onBack(){
    this.router.navigate(['/products'])
  }

}
