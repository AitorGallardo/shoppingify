import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSideBarComponent } from './list-side-bar.component';

describe('ListSideBarComponent', () => {
  let component: ListSideBarComponent;
  let fixture: ComponentFixture<ListSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSideBarComponent]
    });
    fixture = TestBed.createComponent(ListSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
