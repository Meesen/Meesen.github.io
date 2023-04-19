import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovatieComponent } from './innovatie.component';

describe('InnovatieComponent', () => {
  let component: InnovatieComponent;
  let fixture: ComponentFixture<InnovatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovatieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
