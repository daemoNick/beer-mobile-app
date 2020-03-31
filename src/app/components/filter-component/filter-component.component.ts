import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss'],
})
export class FilterComponentComponent implements OnInit {


  constructor(
    public popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  showAllBeers() {
    const onClosedData = 'Show All Beers';
    this.popoverCtrl.dismiss(onClosedData);
  }

  sortByServing() {
    const onClosedData = 'Sort by Serving';
    this.popoverCtrl.dismiss(onClosedData);
  }

  sortByFlavour() {
    const onClosedData = 'Sort by Flavour';
    this.popoverCtrl.dismiss(onClosedData);
  }

}
