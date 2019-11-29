import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsLinkComponent } from './post-details-link.component';

describe('PostDetailsLinkComponent', () => {
  let component: PostDetailsLinkComponent;
  let fixture: ComponentFixture<PostDetailsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
