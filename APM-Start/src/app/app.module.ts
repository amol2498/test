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
import { PeopleDetailsComponent } from 'src/people/people-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from 'src/people/product.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PeopleListComponent,
    CovertToSpacesPipe,
    StartComponent,
    PeopleDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot([
      {path:'', component:WelcomeComponent},
    ])
  ],
  bootstrap: [AppComponent,ProductListComponent, PeopleListComponent]
})
export class AppModule { }
