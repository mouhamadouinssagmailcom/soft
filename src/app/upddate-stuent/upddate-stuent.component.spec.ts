import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpddateStuentComponent } from './upddate-stuent.component';

describe('UpddateStuentComponent', () => {
  let component: UpddateStuentComponent;
  let fixture: ComponentFixture<UpddateStuentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpddateStuentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpddateStuentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
