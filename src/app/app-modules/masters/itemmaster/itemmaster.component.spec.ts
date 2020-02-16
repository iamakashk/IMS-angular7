import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemmasterComponent } from './itemmaster.component';

describe('ItemmasterComponent', () => {
  let component: ItemmasterComponent;
  let fixture: ComponentFixture<ItemmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
