import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BeerFeedService } from 'src/app/services/beer-feed/beer-feed.service';
import { BeerItem } from 'src/app/models/BeerItem';
import { PopoverController } from '@ionic/angular';
import { FilterComponentComponent } from 'src/app/components/filter-component/filter-component.component';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {

  beerIcon = 'assets/icon/pick-icons/bottle-pick.png';
  draftIcon = 'assets/icon/pick-icons/draft-pick.png';

  feedItems: BeerItem[];
  dataFromPopOver;

  // filterState;
  filterValue;

  constructor(
    private router: Router,
    private beerFeedSrvc: BeerFeedService,
    public  popoverController: PopoverController
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

  onRate(e) {
    console.log(e);
  }

  filterItems(flavour) {
    return this.feedItems.filter(item => {
      return item.flavour === flavour;
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterComponentComponent,
      event: ev,
      translucent: true
    });

    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataFromPopOver = dataReturned.data;
        this.filterState(this.dataFromPopOver);
      }
    });
    return await popover.present();
  }

  filterState(data: string) {
    switch (data) {
      case 'Show All Beers':
        this.filterValue = 'nil';
        break;
      case 'Sort by Serving':
        this.filterValue = 'Serving';
        break;
      case 'Sort by Flavour':
        this.filterValue = 'Flavour';
        break;
      default:
        this.filterValue = 'nil';
    }
    console.log(this.filterValue);
  }

}
