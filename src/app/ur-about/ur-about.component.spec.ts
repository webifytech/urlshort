import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrAboutComponent } from './ur-about.component';

describe('UrAboutComponent', () => {
  let component: UrAboutComponent;
  let fixture: ComponentFixture<UrAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
