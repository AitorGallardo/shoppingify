// counter.selectors.ts

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducers';

// Select the counter property from the state
export const selectAllGroceries = (state: AppState) => state.groceries.allGroceries;
export const selectSelectedGroceries = (state: AppState) => state.groceries.selectedGroceries;

// Create a memoized selector using createSelector
export const selectAllGroceriesValue = createSelector(
    selectAllGroceries,
  (allGroceries) => allGroceries
);
export const selectSelectedGroceriesValue = createSelector(
  selectSelectedGroceries,
  (selectedGroceries) => selectedGroceries
);