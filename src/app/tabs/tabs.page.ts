import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  mybeer = 'assets/icon/tab-icons/draft-00-ds.svg';
  clickedMybeer = 'assets/icon/tab-icons/draft-00.svg';

  addNew = 'assets/icon/tab-icons/add-new-ds.svg';
  clickedAddnew = 'assets/icon/tab-icons/add-new.svg';

  sort = 'assets/icon/tab-icons/sort-ds.svg';
  clickedSort = 'assets/icon/tab-icons/sort.svg';

  ismybeerSelected = false;
  isAddSelected = false;
  isSortSelected = false;

  constructor() { }

  ngOnInit() {
    this.ismybeerSelected = true;
  }

  changeMyBeerIcon() {
    this.resetAll();
    this.ismybeerSelected = true;
  }
  changeAddNewIcon() {
    this.resetAll();
    this.isAddSelected = true;
  }
  changeSortIcon() {
    this.resetAll();
    this.isSortSelected = true;
  }

  resetAll(){
    this.isAddSelected = false;
    this.isSortSelected = false;
    this.ismybeerSelected = false;
  }


}
