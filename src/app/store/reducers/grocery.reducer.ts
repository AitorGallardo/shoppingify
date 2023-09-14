import { createReducer, on } from '@ngrx/store';
import { createGrocery, getAllGroceries, loadAllGroceries } from '../actions';
import { GroceryItem } from 'src/app/models/groceryItem';

export interface GroceriesState {
  id: string | null;
  allGroceries: GroceryItem[];
  selectedGroceries: GroceryItem[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const GroceriesInitialState: GroceriesState = {
  id: null,
  allGroceries: [],
  selectedGroceries: [],
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
  }))
);

export function GroceriesReducer(state: any, action: any) {
  return _GroceriesReducer(state, action);
}