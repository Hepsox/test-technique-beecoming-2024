import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardComponent } from './list-card/list-card.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'list', component: ListCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
