import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardComponent } from './list-card/list-card.component';

export const routes: Routes = [
  { path: '', component: Map },
  { path: 'list', component: ListCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
