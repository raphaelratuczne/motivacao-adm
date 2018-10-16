import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrasesRoutingModule } from './frases-routing.module';
import { FrasesComponent } from './frases.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FrasesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [FrasesComponent]
})
export class FrasesModule { }
