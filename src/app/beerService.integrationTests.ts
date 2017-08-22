import {} from 'jasmine';
import { TestBed, async } from '@angular/core/testing';
import { BeerService } from './beerService';
declare var angular: any;

describe('BeerService', () => {
  beforeEach(async(() => {
  }));

  it('should create the app', async(() => {
    var $injector = angular.injector([ 'myModule' ]);
    this.beerService = $injector.get( 'myService' );
  }));
});
