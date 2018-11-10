import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';

import { ModalPalavraComponent } from './modal-palavra.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [ModalPalavraComponent]
})
export class ModalPalavraModule { }
