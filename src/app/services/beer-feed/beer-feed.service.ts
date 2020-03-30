import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class BeerFeedService {

  constructor(
    private http: HttpService
  ) { }

  getAllBeerItems() {
    return this.http.get(`/beer/`);
  }
}
