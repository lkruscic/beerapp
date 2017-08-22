import { Component, OnInit } from '@angular/core';
import { Beer } from "./beer.model";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers: Array<Beer>;

  constructor() { }

  ngOnInit() {
  }

}
