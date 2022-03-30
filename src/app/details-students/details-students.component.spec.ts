import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStudentsComponent } from './details-students.component';

describe('DetailsStudentsComponent', () => {
  let component: DetailsStudentsComponent;
  let fixture: ComponentFixture<DetailsStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
