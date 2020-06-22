import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSlugComponent } from './url-slug.component';

describe('UrlSlugComponent', () => {
  let component: UrlSlugComponent;
  let fixture: ComponentFixture<UrlSlugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlSlugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlSlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
