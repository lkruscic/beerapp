export class FilterBeers
{
    page: number;
}

export class Beer
{
    id: string;
    nameDisplay: string;
    statusDisplay: string;
    isOrganic: string;
}

export class BeerPage
{
    currentPage: number;
    numberOfPages: number
    totalResults: number;
    beers: Beer[];
}

