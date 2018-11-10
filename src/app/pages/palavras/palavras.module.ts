import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';


import { PalavrasRoutingModule } from './palavras-routing.module';
import { PalavrasComponent } from './palavras.component';
import { ModalPalavraComponent } from './modal-palavra/modal-palavra.component';
import { ModalPalavraModule } from './modal-palavra/modal-palavra.module';
import { ModalExclusaoComponent } from './modal-exclusao/modal-exclusao.component';
import { ModalExclusaoModule } from './modal-exclusao/modal-exclusao.module';

@NgModule({
  imports: [
    CommonModule,
    PalavrasRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ModalPalavraModule,
    ModalExclusaoModule,
    MatCardModule
  ],
  declarations: [PalavrasComponent],
  entryComponents: [ModalPalavraComponent, ModalExclusaoComponent]
})
export class PalavrasModule { }
