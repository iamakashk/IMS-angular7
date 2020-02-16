import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceMasterComponent } from './source-master.component';

describe('SourceMasterComponent', () => {
  let component: SourceMasterComponent;
  let fixture: ComponentFixture<SourceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
