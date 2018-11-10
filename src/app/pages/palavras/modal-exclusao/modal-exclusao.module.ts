import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { MatDialogModule, /*MatInputModule,*/ MatButtonModule } from '@angular/material';

import { ModalExclusaoComponent } from './modal-exclusao.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    // MatInputModule,
    MatButtonModule,
    // FormsModule
  ],
  declarations: [ModalExclusaoComponent]
})
export class ModalExclusaoModule { }
