import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosRestaurantComponent } from './nos-restaurant.component';

describe('NosRestaurantComponent', () => {
  let component: NosRestaurantComponent;
  let fixture: ComponentFixture<NosRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
