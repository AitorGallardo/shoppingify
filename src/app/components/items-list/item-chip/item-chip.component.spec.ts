import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChipComponent } from './item-chip.component';

describe('ItemChipComponent', () => {
  let component: ItemChipComponent;
  let fixture: ComponentFixture<ItemChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemChipComponent]
    });
    fixture = TestBed.createComponent(ItemChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
