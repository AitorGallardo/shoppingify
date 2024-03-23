import { Routes } from '@angular/router';
import { CarouselExampleComponent } from 'src/app/components/carousel-example/carousel-example.component';
import { ItemsListComponent } from 'src/app/components/items-list/items-list.component';




export const layoutRoutes: Routes = [

 { path: '', component: ItemsListComponent },
 { path: 'lol', component: CarouselExampleComponent },
//  { path: 'ingreso-egreso', component: IngresoEgresoComponent },
//  { path: 'detalle', component: DetalleComponent },

];