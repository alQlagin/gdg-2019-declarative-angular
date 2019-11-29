import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoredLinkComponent } from './authored-link.component';

describe('AuthoredLinkComponent', () => {
  let component: AuthoredLinkComponent;
  let fixture: ComponentFixture<AuthoredLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoredLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoredLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
