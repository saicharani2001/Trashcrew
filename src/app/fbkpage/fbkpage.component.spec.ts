import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbkpageComponent } from './fbkpage.component';

describe('FbkpageComponent', () => {
  let component: FbkpageComponent;
  let fixture: ComponentFixture<FbkpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbkpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbkpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
