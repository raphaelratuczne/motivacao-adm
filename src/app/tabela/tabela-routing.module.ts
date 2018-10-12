import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabelaComponent } from './tabela.component';

const routes: Routes = [
  { path: '', component: TabelaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabelaRoutingModule { }
