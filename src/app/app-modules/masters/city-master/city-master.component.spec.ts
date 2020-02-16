import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMasterComponent } from './city-master.component';

describe('CityMasterComponent', () => {
  let component: CityMasterComponent;
  let fixture: ComponentFixture<CityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
