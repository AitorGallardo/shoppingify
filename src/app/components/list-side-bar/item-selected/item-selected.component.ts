import {
  setGroceryOpenedOptions,
  updateSelectedGrocery,
  UpdateSelectedGroceryOptions,
} from './../../../store/actions/grocery.actions';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { GroceryItem } from 'src/app/models/grocery';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.css'],
})
export class ItemSelectedComponent implements OnInit{
  private store = inject(Store<AppState>);

  @Input() item: GroceryItem = new GroceryItem();
  @Input() isOpened: boolean = false;

  quantity: number = 0;
  showOptions = false;
  public animationState = '3'; //0:opened 1: forward, 2: bakward 3: nothing


  ngOnInit() {
    this.quantity = this.item.quantity;
    this.showOptions = this.isOpened;
    if(this.showOptions) {
      this.animationState = '0';
    }
  }

  animationEnd(){
    const {id} = this.item;
    this.store.dispatch( setGroceryOpenedOptions({ groceryId:id }) );
  }
 

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
