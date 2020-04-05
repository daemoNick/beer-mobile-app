import { Component, OnInit } from '@angular/core';
import { Flavours } from 'src/app/mock-data/data';
import { PostBeerItem } from 'src/app/models/BeerItem';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit {

  flavours = Flavours;

  postData: PostBeerItem = {
    beer_name: '',
    brewer: '',
    price: 0,
    serving_type: '',
    rating: 0,
    flavour: [],
    description: ''
  };

  newBeerForm = new FormGroup({
    beer_name: new FormControl('', [Validators.required]),
    brewer: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    serving_type: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
    flavour: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    console.log(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);

    this.newBeerForm.controls.rating.setValue($event.newValue);
    console.log('This rating value is ' + this.newBeerForm.controls.rating.value);

  }

  submitAction(){
    console.log(this.newBeerForm);
  }

}
