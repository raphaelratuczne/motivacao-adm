import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';


import { FrasesRoutingModule } from './frases-routing.module';
import { FrasesComponent } from './frases.component';
import { ModalFraseComponent } from './modal-frase/modal-frase.component';
import { ModalFraseModule } from './modal-frase/modal-frase.module';

@NgModule({
  imports: [
    CommonModule,
    FrasesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ModalFraseModule
  ],
  declarations: [FrasesComponent],
  entryComponents: [ModalFraseComponent]
})
export class FrasesModule { }
