export interface BeerItem {
    id: number;
    beer_name: string;
    brewer: string;
    created_on: number;
    price: number;
    serving_type: string;
    rating: number;
    flavour: string[];
    description: string;
}

export interface PostBeerItem{
    beer_name: string;
    brewer: string;
    price: number;
    serving_type: string;
    rating: number;
    flavour: string[];
    description: string;
}
