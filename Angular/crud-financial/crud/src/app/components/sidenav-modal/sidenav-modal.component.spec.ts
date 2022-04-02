import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavModalComponent } from './sidenav-modal.component';

describe('SidenavModalComponent', () => {
  let component: SidenavModalComponent;
  let fixture: ComponentFixture<SidenavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
