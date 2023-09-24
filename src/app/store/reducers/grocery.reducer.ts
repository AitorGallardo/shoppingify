import { createReducer, on } from '@ngrx/store';
import { createGrocery, getAllGroceries, loadAllGroceries, setGroceryOpenedOptions, updateSelectedGrocery } from '../actions';
import { Grocery, GroceryItem } from 'src/app/models/grocery';
import { findGroceryAndUpdate } from 'src/app/helpers/groceryFunctions';

export interface GroceriesState {
  id: string | null;
  allGroceries: Grocery[];
  selectedGroceries: GroceryItem[];
  groceryOpenedOptions: number;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const GroceriesInitialState: GroceriesState = {
  id: null,
  allGroceries: [],
  selectedGroceries: [],
  groceryOpenedOptions: -1,
  loaded: false,
  loading: false,
  error: null,
};

const _GroceriesReducer = createReducer(
  GroceriesInitialState,

  on(getAllGroceries, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadAllGroceries, (state, { groceries }) => ({
    ...state,
    loading: false,
    loaded: true,
    allGroceries: [...groceries],
  })),

  on(createGrocery, (state, { grocery }) => ({
    ...state,
    selectedGroceries: [...state.selectedGroceries, grocery],
  })),

  on(updateSelectedGrocery, (state, { groceryId, option }) => ({
    ...state,
    selectedGroceries: findGroceryAndUpdate(state, groceryId, option),
  })),

  on(setGroceryOpenedOptions, (state, { groceryId }) => ({
    ...state,
    groceryOpenedOptions: groceryId,
  }))
);

export function GroceriesReducer(state: any, action: any) {
  return _GroceriesReducer(state, action);
}
