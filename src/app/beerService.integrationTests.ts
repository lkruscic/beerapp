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

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
