import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BeerFeedService } from 'src/app/services/beer-feed/beer-feed.service';
import { BeerItem } from 'src/app/models/BeerItem';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {

  beerIcon = 'assets/icon/pick-icons/bottle-pick.png';
  draftIcon = 'assets/icon/pick-icons/draft-pick.png';

  feedItems: BeerItem[];

  constructor(
    private router: Router,
    private beerFeedSrvc: BeerFeedService
  ) { }

  ngOnInit() {
    this.beerFeedSrvc.getAllBeerItems().subscribe((res: BeerItem[]) => this.feedItems = res);
  }

  openBeerItem(item) {
     const navigationExtras: NavigationExtras = {
       state: {
         item
       }
     };
     this.router.navigate(['/', 'tabs', 'view-all', 'beer-detail'], navigationExtras);
  }

  onRate(e){
    console.log(e);
  }

  // servingTypeString(item: BeerItem): string {
  //   let servingType: string;
  //   switch (item.serving_type) {
  //     case 0:
  //       servingType = 'Bottle';
  //       break;
  //     case 1:
  //       servingType = 'Draft';
  //       break;
  //     default:
  //       servingType = 'none';
  //   }
  //   return servingType;
  // }

}
