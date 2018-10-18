import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';

import { ModalFraseRoutingModule } from './modal-frase-routing.module';
import { ModalFraseComponent } from './modal-frase.component';

@NgModule({
  imports: [
    CommonModule,
    ModalFraseRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [ModalFraseComponent]
})
export class ModalFraseModule { }
