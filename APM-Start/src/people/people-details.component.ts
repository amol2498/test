import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'pm-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  pageTitle:string='Product Details Page'
  constructor() { }

  ngOnInit(): void {
  }

}
