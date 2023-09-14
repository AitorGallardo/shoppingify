import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getAllGroceries, loadAllGroceries } from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
import { GroceryService } from 'src/app/services/grocery.service';

@Injectable()
export class GroceryEffects {
  constructor(
    private actions$: Actions,
    private groceryService: GroceryService
  ) {}

  getAllGroceries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllGroceries),
      mergeMap((action) =>
        this.groceryService.getAllGroceries().pipe(
          map((groceries) => loadAllGroceries({ groceries }))
          //   catchError((err) =>
          //     of(usuariosActions.cargarUsuarioError({ payload: err }))
          //   )
        )
      )
    )
  );

//TODO => createGrocery$ = createEffect ()

}
