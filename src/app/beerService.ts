import { Injectable } from "@angular/core"
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FilterBeers, Beer } from "./beer/beer.model"

@Injectable()
export class BeerService
{
    private baseUrl: string = "http://api.brewerydb.com/v2";
    private key: string = "0cbfb61c14a8d5676cec7f0d48acac63";
    constructor(private http: Http)
    {}

    getBeersFor(filter:FilterBeers): Observable<Beer[]>
    {
        let params: URLSearchParams = new URLSearchParams();
        params.set('key', this.key);
        params.set('p', filter.page.toString());

        let beers = this.http
            .get(`${this.baseUrl}/beers`,
                {
                    headers: this.getHeaders(),
                    search: params
                })
            .map(this.mapBeers);
        return beers;
    }

    private getHeaders()
    {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private mapBeers(response:Response): Beer[]
    {
        return response.json().results.map(this.toBeer)
    }

    private toBeer(r:any): Beer
    {
        let beer = <Beer>({
            id: r.id,
            isOrganic: r.isOrganic,
            nameDisplay: r.nameDisplay,
            statusDisplay: r.statusDisplay,
        });
        return beer;
    }
}

