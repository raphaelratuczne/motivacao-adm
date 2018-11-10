import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescricoesComponent } from './descricoes.component';

const routes: Routes = [
  { path: '', component: DescricoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescricoesRoutingModule { }
