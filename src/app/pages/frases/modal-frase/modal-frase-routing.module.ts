import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFraseComponent } from './modal-frase.component';

const routes: Routes = [
  { path: '', component: ModalFraseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalFraseRoutingModule { }
