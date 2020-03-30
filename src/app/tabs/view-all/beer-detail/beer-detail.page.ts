import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerItem } from 'src/app/models/BeerItem';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.page.html',
  styleUrls: ['./beer-detail.page.scss'],
})
export class BeerDetailPage implements OnInit {

  beerItem: BeerItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      if ( this.router.getCurrentNavigation().extras.state) {
        this.beerItem =  this.router.getCurrentNavigation().extras.state.item;
      }
      console.log('params: ', this.beerItem);
    });
  }

}
