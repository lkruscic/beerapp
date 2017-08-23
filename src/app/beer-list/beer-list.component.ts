import { Component, OnInit } from '@angular/core';
import { Beer, FilterBeers } from "app/beer/beer.model";
import { BeerService } from "app/beerService";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  // input:
  beerName: string;
  styleId: string;

  // output:
  beers: Beer[] = [];
  

  constructor(private beerService: BeerService) { 
  }

  ngOnInit() {
    this.beerService.getBeersFor(new FilterBeers(1, null, null))
    .subscribe(beerPage => this.beers = beerPage.beers);
  }

  searchBeers() {
    this.beerService.getBeersFor(new FilterBeers(1, this.beerName, this.styleId))
      .subscribe(beerPage => this.beers = beerPage.beers);
  }

}
