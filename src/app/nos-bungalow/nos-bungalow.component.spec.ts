import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosBungalowComponent } from './nos-bungalow.component';

describe('NosBungalowComponent', () => {
  let component: NosBungalowComponent;
  let fixture: ComponentFixture<NosBungalowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosBungalowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosBungalowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
