import { createAction, props } from '@ngrx/store';
import { Grocery, GroceryItem } from '../../models/grocery';

export type UpdateSelectedGroceryOptions = 'add' | 'remove' | 'delete';

export const getAllGroceries = createAction(
    '[Grocery] Get All Groceries'
);
export const getSelectedGroceries = createAction(
    '[Grocery] Get Selected Groceries'
);
export const loadAllGroceries = createAction(
    '[Grocery] Load All Groceries',
    props<{ groceries: Grocery[] }>()
);
export const loadSelectedGroceries = createAction(
    '[Grocery] Load Selected Groceries',
    props<{ groceries: GroceryItem[] }>()
);
export const createGrocery = createAction(
    '[Grocery] Create Grocery',
    props<{ grocery: GroceryItem }>()
);
export const addSelectedGrocery = createAction(
    '[Grocery] Add Selected Grocery',
    props<{ groceryId: number }>()
);
export const updateSelectedGrocery = createAction(
    '[Grocery] Update Selected Grocery',
    props<{ groceryId: number, option:UpdateSelectedGroceryOptions }>()
);
export const setGroceryOpenedOptions = createAction(
    '[Grocery] Set Grocery Opened Options',
    props<{ groceryId: number}>()
);

