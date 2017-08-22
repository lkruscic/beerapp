import { Injectable } from "@angular/core"
import { FilterBeers, Beer } from "./beer/beer.model"

@Injectable()
export class BeerService
{
    getBeers(filter:FilterBeers): Beer[]
    {
        return [];
    }
}