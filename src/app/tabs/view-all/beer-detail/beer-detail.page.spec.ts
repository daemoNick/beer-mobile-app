import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeerDetailPage } from './beer-detail.page';

describe('BeerDetailPage', () => {
  let component: BeerDetailPage;
  let fixture: ComponentFixture<BeerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
