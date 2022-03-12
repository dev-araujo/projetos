import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHomeComponent } from './content-home.component';

describe('ContentComponent', () => {
  let component: ContentHomeComponent;
  let fixture: ComponentFixture<ContentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
