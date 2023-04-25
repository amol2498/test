import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { CovertToSpacesPipe } from './shared/convert-to-spaces';
import { StartComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { observable } from 'rxjs';
import { PeopleListComponent } from 'src/people/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PeopleListComponent,
    CovertToSpacesPipe,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent,ProductListComponent, PeopleListComponent]
})
export class AppModule { }
