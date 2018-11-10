import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalavrasComponent } from './palavras.component';

const routes: Routes = [
  { path: '', component: PalavrasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalavrasRoutingModule { }
