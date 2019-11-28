import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoredPageComponent } from './authored-page.component';

describe('AuthoredPageComponent', () => {
  let component: AuthoredPageComponent;
  let fixture: ComponentFixture<AuthoredPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoredPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
