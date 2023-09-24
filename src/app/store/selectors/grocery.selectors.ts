import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducers';

// Select the groceries from the state
export const selectAllGroceries = (state: AppState) => state.groceries.allGroceries;
export const selectSelectedGroceries = (state: AppState) => state.groceries.selectedGroceries;
export const selectGroceryOpenedOptions = (state: AppState) => state.groceries.groceryOpenedOptions;

// Create a memoized selector using createSelector
export const selectAllGroceriesValue = createSelector(
    selectAllGroceries,
  (allGroceries) => allGroceries
);

export const selectSelectedGroceriesValue = createSelector(
  selectSelectedGroceries,
  (selectedGroceries) => selectedGroceries
);

// Create a selector that retrieves all selected groceries and the grocery with opened options
export const selectDataForSidebarGroceriesListValue = createSelector(
  selectSelectedGroceries,
  selectGroceryOpenedOptions,
  (selectedGroceries,groceryOptionsOpened) => ({selectedGroceries,groceryOptionsOpened})
);

// Create a selector that retrieves a grocery by id
export const selectGroceryById = (id: number) => createSelector(
  selectSelectedGroceries,
  (selectedGroceries) => selectedGroceries.find(grocery => grocery.id === id)
);


