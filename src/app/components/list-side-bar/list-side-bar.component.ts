import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DisplayedGroceriesList } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';
import { AppState } from 'src/app/store/app.reducers';
import { selectSelectedGroceriesValue } from 'src/app/store/selectors/grocery.selectors';


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


  ngOnInit() {
    this.selectedGroceriesListSubscription = this.store.pipe(select(selectSelectedGroceriesValue)).subscribe( (selectedGroceries) => {
      this.selectedGroceriesList = this.groceryService.groupItemsByCategory(selectedGroceries);

    });
  }

}
