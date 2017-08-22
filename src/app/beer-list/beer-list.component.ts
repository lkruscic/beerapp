import { Component, OnInit } from '@angular/core';
import { Beer } from "app/beer/beer.model";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Array<Beer>;

  constructor() { }

  ngOnInit() {
  }

}
