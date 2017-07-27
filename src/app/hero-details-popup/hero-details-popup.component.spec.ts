import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsPopupComponent } from './hero-details-popup.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailsPopupComponent;
  let fixture: ComponentFixture<HeroDetailsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
