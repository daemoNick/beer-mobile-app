import { Component, OnInit } from '@angular/core';
import { Flavours } from 'src/app/mock-data/data';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit {

  flavours = Flavours;

  constructor() { }

  ngOnInit() {
  }

}
