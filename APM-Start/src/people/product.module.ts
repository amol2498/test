import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list.component';
import { PeopleDetailsComponent } from './people-details.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'products', component:PeopleListComponent},
        {path:'products/:id', component:PeopleDetailsComponent}
      ]
    )
  ]
})
export class ProductModule { }
