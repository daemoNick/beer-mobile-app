import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // openPlanItem(pageExtras) {
  //   // this.router.navigate([`moneyzip/tabs/plans/savings/${{plan}}`]);
  //   const navigationExtras: NavigationExtras = {
  //     state: {
  //       pageExtras
  //     }
  //   };
  //   this.router.navigate(['/', 'moneyzip', 'tabs', 'plans', 'savings', 'plan-detail'], navigationExtras);
  // }

  openBeerItem(){
    this.router.navigate(['/', 'tabs', 'view-all', 'beer-detail']);
  }

}
