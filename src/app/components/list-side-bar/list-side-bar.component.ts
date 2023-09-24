import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DisplayedGroceriesList } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';
import { AppState } from 'src/app/store/app.reducers';
import { selectDataForSidebarGroceriesListValue, selectSelectedGroceriesValue } from 'src/app/store/selectors/grocery.selectors';


@Component({
  selector: 'app-list-side-bar',
  templateUrl: './list-side-bar.component.html',
  styleUrls: ['./list-side-bar.component.css']
})

export class ListSideBarComponent {
  private store = inject(Store<AppState>);
  groceryService = inject(GroceryService);

  selectedGroceriesListSubscription: Subscription = new Subscription();
  selectedGroceriesList: DisplayedGroceriesList = [];
  openedGroceryOptions: number = -1;


  ngOnInit() {
    // this.selectedGroceriesListSubscription = this.store.pipe(select(selectSelectedGroceriesValue)).subscribe( (selectedGroceries) => {
    //   this.selectedGroceriesList = this.groceryService.groupItemsByCategory(selectedGroceries);
    // });
    this.selectedGroceriesListSubscription = this.store.pipe(select(selectDataForSidebarGroceriesListValue)).subscribe( ({selectedGroceries,groceryOptionsOpened}) => {
      this.selectedGroceriesList = this.groceryService.groupItemsByCategory(selectedGroceries);
      this.openedGroceryOptions = groceryOptionsOpened;
    });
  }

  isOpenedGroceryOptions(groceryId: number): boolean {
    return this.openedGroceryOptions === groceryId;
  }
}
