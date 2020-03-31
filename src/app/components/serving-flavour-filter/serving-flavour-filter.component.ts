import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-serving-flavour-filter',
  templateUrl: './serving-flavour-filter.component.html',
  styleUrls: ['./serving-flavour-filter.component.scss'],
})
export class ServingFlavourFilterComponent implements OnInit {

  filterType = 'Serving';

  flavours = [
    'Alcohol', 'Hoppy', 'Floral', 'Spicy', 'Malty', 'Burnt', 'Sweet', 'Sour', 'Bitter', 'Dry', 'Linger'
  ];

  servings = ['Bottle', 'Draft'];

  constructor(
    private navParams: NavParams,
    public popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.filterType = this.navParams.data.filterType;
  }

  setFlavour(flavour) {
    const onClosedData = flavour;
    console.log(flavour);
    this.popoverCtrl.dismiss(onClosedData);
  }

  setServing(serving) {
    const onClosedData = serving;
    console.log(serving);
    this.popoverCtrl.dismiss(onClosedData);
  }

}
