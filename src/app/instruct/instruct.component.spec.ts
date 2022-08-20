import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructComponent } from './instruct.component';

describe('InstructComponent', () => {
  let component: InstructComponent;
  let fixture: ComponentFixture<InstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
