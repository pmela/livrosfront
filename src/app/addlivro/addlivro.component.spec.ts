import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlivroComponent } from './addlivro.component';

describe('AddlivroComponent', () => {
  let component: AddlivroComponent;
  let fixture: ComponentFixture<AddlivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
