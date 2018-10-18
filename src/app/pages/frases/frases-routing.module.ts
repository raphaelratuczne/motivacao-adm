import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrasesComponent } from './frases.component';

const routes: Routes = [
  { path: '', component: FrasesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrasesRoutingModule { }
