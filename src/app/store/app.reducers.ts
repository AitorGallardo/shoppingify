import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   usuario: reducers.UsuarioState,
   groceries: reducers.GroceriesState,
}



export const appReducers: ActionReducerMap<AppState> = {
   usuario: reducers.UsuarioReducer,
   groceries: reducers.GroceriesReducer
}