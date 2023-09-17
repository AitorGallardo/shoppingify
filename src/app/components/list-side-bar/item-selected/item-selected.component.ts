import {
  addSelectedGrocery,
  createGrocery,
  getAllGroceries,
  updateSelectedGrocery,
  UpdateSelectedGroceryOptions,
} from './../../../store/actions/grocery.actions';
import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroceryItem } from 'src/app/models/grocery';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.css'],
})
export class ItemSelectedComponent {
  private store = inject(Store<AppState>);

  @Input() item: GroceryItem = new GroceryItem();

  showOptions = false;
  public animationState = '0'; //1: forward, 2: bakward 0: nothing

  showOptionsToggle() {
    this.showOptions = !this.showOptions;

    if (!this.showOptions) {
      this.animationState = '2';
    } else {
      this.animationState = '1';
    }
  }

  addItem(event: any) {
    const option: UpdateSelectedGroceryOptions = 'add';
    this.updateSelectedItem(event, option);
  }
  removeItem(event: any) {
    const option: UpdateSelectedGroceryOptions = 'remove';
    this.updateSelectedItem(event, option);
  }
  deleteItem(event: any) {
    const option: UpdateSelectedGroceryOptions = 'delete';
    this.updateSelectedItem(event, option);
  }

  updateSelectedItem(event: any, option: UpdateSelectedGroceryOptions) {
    event.stopPropagation();
    const { id: groceryId } = this.item;
    this.store.dispatch(updateSelectedGrocery({ groceryId, option }));
  }
}
