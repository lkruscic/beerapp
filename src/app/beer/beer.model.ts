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
    constructor(
        public currentPage: number,
        public numberOfPages: number,
        public totalResults: number,
        public beers: Beer[]){}

    public static CreateUndefined() {
        return new BeerPage(undefined, undefined, undefined, undefined);
    }

    public getNextPageNumber() {
        let nextPage = this.currentPage < this.numberOfPages ?
                this.currentPage + 1 :
                this.numberOfPages;
        return nextPage;
    }

    public getPreviousPageNumber() {
        let previousPage = this.currentPage > 1 ?
                this.currentPage - 1 :
                1;
        return previousPage;
    }
}

