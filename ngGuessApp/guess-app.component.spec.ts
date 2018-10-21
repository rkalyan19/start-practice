import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessAppComponent } from './guess-app.component';

describe('GuessAppComponent', () => {
  let component: GuessAppComponent;
  let fixture: ComponentFixture<GuessAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
