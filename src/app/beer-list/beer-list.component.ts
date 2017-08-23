import { Component, OnInit } from '@angular/core';
import { Beer, FilterBeers, BeerPage } from "app/beer/beer.model";
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
  beerPage: BeerPage = BeerPage.CreateUndefined();
  

  constructor(private beerService: BeerService) { 
  }

  ngOnInit() {
    this.beerService.getBeersFor(new FilterBeers(1, null, null))
    .subscribe(beerPage => this.beerPage = beerPage);
  }

  searchBeers(page: number) {
    this.beerService.getBeersFor(new FilterBeers(page, this.beerName, this.styleId))
      .subscribe(beerPage =>
        {
          this.beerPage = beerPage;
        });
  }

  pageUp() {
    let nextPage = this.beerPage.getNextPageNumber();
    this.searchBeers(nextPage);
  }

  pageDown () {
    let previousPage = this.beerPage.getPreviousPageNumber();
    this.searchBeers(previousPage);
  }

}
