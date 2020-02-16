import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMasterComponent } from './area-master.component';

describe('AreaMasterComponent', () => {
  let component: AreaMasterComponent;
  let fixture: ComponentFixture<AreaMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
