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
  beerPage: BeerPage;
  

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
    let page = this.beerPage.currentPage < this.beerPage.numberOfPages ?
                this.beerPage.currentPage + 1 :
                this.beerPage.numberOfPages;
    this.searchBeers(page);
  }

  pageDown () {
    let page = this.beerPage.currentPage > 1 ?
                this.beerPage.currentPage - 1 :
                1;
    this.searchBeers(page);
  }

}
