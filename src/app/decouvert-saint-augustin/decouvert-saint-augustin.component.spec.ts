import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouvertSaintAugustinComponent } from './decouvert-saint-augustin.component';

describe('DecouvertSaintAugustinComponent', () => {
  let component: DecouvertSaintAugustinComponent;
  let fixture: ComponentFixture<DecouvertSaintAugustinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecouvertSaintAugustinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecouvertSaintAugustinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
