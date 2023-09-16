import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroceryItem } from 'src/app/models/grocery';
import { createGrocery } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-item-chip',
  templateUrl: './item-chip.component.html',
  styleUrls: ['./item-chip.component.css']
})
export class ItemChipComponent {

  @Input() item: GroceryItem = new GroceryItem();

  private store = inject(Store<AppState>);

  addItemToCart() {
    this.store.dispatch(createGrocery({grocery: this.item}));
  } 

}
