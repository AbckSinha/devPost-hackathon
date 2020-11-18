import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenPageComponent } from './broken-page.component';

describe('BrokenPageComponent', () => {
  let component: BrokenPageComponent;
  let fixture: ComponentFixture<BrokenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
