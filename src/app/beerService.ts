import { Injectable } from "@angular/core"
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FilterBeers, Beer, BeerPage } from "./beer/beer.model"

@Injectable()
export class BeerService
{
    private baseUrl: string = "http://api.brewerydb.com/v2";
    private key: string = "0cbfb61c14a8d5676cec7f0d48acac63";
    constructor(private http: Http)
    {}

    getBeersFor(filter:FilterBeers): Observable<BeerPage>
    {
        let beers = this.http
            .get(`${this.baseUrl}/beers?key=${this.key}&${filter.getParamsAsUrl()}`,
                {
                    headers: this.getHeaders(),
                })
            .map(this.mapBeers);
        return beers;
    }

    private getHeaders()
    {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private mapBeers(response:Response): BeerPage
    {
        let result = response.json();
        return new BeerPage(
            result.currentPage,
            result.numberOfPages,
            result.totalResults,
            result.data != null ? result.data.map(toBeer) : undefined);
    }
}

function toBeer(r:any): Beer
{
    let beer = <Beer>({
        id: r.id,
        nameDisplay: r.nameDisplay,
        statusDisplay: r.statusDisplay,
        styleId: r.styleId,
        isOrganic: r.isOrganic,
    });
    return beer;
}

