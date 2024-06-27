import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertibleComponent } from './convertible.component';

describe('ConvertibleComponent', () => {
  let component: ConvertibleComponent;
  let fixture: ComponentFixture<ConvertibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
