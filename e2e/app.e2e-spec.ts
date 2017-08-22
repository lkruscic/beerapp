import { BeerappPage } from './app.po';

describe('beerapp App', () => {
  let page: BeerappPage;

  beforeEach(() => {
    page = new BeerappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
