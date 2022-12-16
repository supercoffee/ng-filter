import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFilterComponent } from './ng-filter.component';

describe('NgFilterComponent', () => {
  let component: NgFilterComponent;
  let fixture: ComponentFixture<NgFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
