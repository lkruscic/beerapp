export class FilterBeers
{
    constructor(
        private page: number,
        private name?: string,
        private styleId?: string){}

    public getParamsAsUrl() : string
    {
        let params = `p=${this.page.toString()}`;
        if (this.name != null) params += `&name=${this.name.toString()}`;
        if (this.styleId != null) params += `&styleId=${this.styleId.toString()}`;
        return params;
    }
}

export class Beer
{
    id: string;
    nameDisplay: string;
    statusDisplay: string;
    styleId: number;
    isOrganic: string;
}

export class BeerPage
{
    currentPage: number;
    numberOfPages: number
    totalResults: number;
    beers: Beer[];
}

