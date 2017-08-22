import { Component, OnInit } from '@angular/core';
import { Beer } from "app/beer/beer.model";
import { BeerService } from "app/beerService";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private beerService: BeerService) { 
  }

  ngOnInit() {
    this.beerService.getBeersFor({page: 1})
    .subscribe(beers => this.beers = beers);
  }

}
