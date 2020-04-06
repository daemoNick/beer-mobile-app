import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BeerFeedService } from 'src/app/services/beer-feed/beer-feed.service';
import { BeerItem } from 'src/app/models/BeerItem';
import { PopoverController } from '@ionic/angular';
import { FilterComponentComponent } from 'src/app/components/filter-component/filter-component.component';
import { ServingFlavourFilterComponent } from 'src/app/components/serving-flavour-filter/serving-flavour-filter.component';
import { items } from 'src/app/mock-data/data';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss']
})
export class ViewAllPage implements OnInit {
  constructor(
    private router: Router,
    private beerFeedSrvc: BeerFeedService,
    public popoverController: PopoverController
  ) {}

  beerIcon = 'assets/icon/pick-icons/bottle-pick.png';
  draftIcon = 'assets/icon/pick-icons/draft-pick.png';

  feedItems: BeerItem[];
  dataFromPopOver;
  dataFromSecondPopover;

  filterType;
  filterValue;

  groupByDate;
  arrGroupByDate = [];

  dates: string[];

  ngOnInit() {
    // this.beerFeedSrvc
    //   .getAllBeerItems()
    //   .subscribe((res: BeerItem[]) => (this.feedItems = res));
    this.feedItems = items;
    this.sortByDate();
    this.groupItemsByDate();
  }

  groupItemsByDate() {
    this.groupByDate = this.feedItems.reduce((r, a) => {
      // console.log('a', a);
      // console.log('r', r);
      r[a.created_on] = [...r[a.created_on] || [], a];
      return r;
    }, {});
    console.log(this.groupByDate);

    // --- Store keys in a variable to loop through later ----
    this.dates = Object.keys(this.groupByDate);
    // const values = Object.values(this.groupByDate);
  }

  // --- Navigate to beer detail page ----
  openBeerItem(item) {
    const navigationExtras: NavigationExtras = {
      state: {
        item
      }
    };
    this.router.navigate(
      ['/', 'tabs', 'view-all', 'beer-detail'],
      navigationExtras
    );
  }

  // --- Popover for setting different filter states [view all, filter by serving, filter by flavour] ----
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterComponentComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });

    popover.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        this.dataFromPopOver = dataReturned.data;
        this.filterState(this.dataFromPopOver);
      }
    });
    return await popover.present();
  }

  // --- Popover for controlling filter state values [ filter by serving types, filter by flavour types] ----
  async presentServFlavPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ServingFlavourFilterComponent,
      event: ev,
      translucent: true,
      componentProps: {
        filterType: this.filterValue
      },
      backdropDismiss: false
    });

    popover.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        this.dataFromSecondPopover = dataReturned.data;
        this.filterLogic(this.dataFromSecondPopover);
      }
    });
    return await popover.present();
  }

  filterState(data: string) {
    switch (data) {
      case 'Show All Beers':
        this.feedItems = items;
        this.groupItemsByDate();
        this.filterValue = 'nil';
        break;
      case 'Sort by Serving':
        this.filterValue = 'Serving';
        break;
      case 'Sort by Flavour':
        this.filterValue = 'Flavour';
        break;
      default:
        this.feedItems = items;
        this.groupItemsByDate();
        this.filterValue = 'nil';
    }
    console.log(this.filterValue);
  }

  filterLogic(data: string) {
    switch (this.filterValue) {
      case 'Serving':
        this.filterServing(data);
        break;
      case 'Flavour':
        this.filterFlavour(data);
        break;
      default:
        this.filterValue = 'nil';
    }
  }

  filterServing(serving) {
    this.feedItems = items;
    this.feedItems = this.feedItems.filter((feedItem: BeerItem) => {
      return feedItem.serving_type === serving;
    });
    this.groupItemsByDate();
  }

  filterFlavour(passedflavour) {
    this.feedItems = items;
    const testArray = this.feedItems.filter(arr => {
        return arr.flavour.find(item => item === passedflavour);
    });

    this.feedItems = testArray;
    console.log(testArray);
    this.groupItemsByDate();
  }

  sortByDate() {
    return this.feedItems = this.feedItems.sort((a, b) => {
      return b.created_on - a.created_on;
    });
  }

}
