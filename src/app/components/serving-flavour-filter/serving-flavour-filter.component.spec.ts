import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServingFlavourFilterComponent } from './serving-flavour-filter.component';

describe('ServingFlavourFilterComponent', () => {
  let component: ServingFlavourFilterComponent;
  let fixture: ComponentFixture<ServingFlavourFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServingFlavourFilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServingFlavourFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
