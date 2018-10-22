import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticaPrivacidadeRoutingModule } from './politica-privacidade-routing.module';
import { PoliticaPrivacidadeComponent } from './politica-privacidade.component';

@NgModule({
  imports: [
    CommonModule,
    PoliticaPrivacidadeRoutingModule
  ],
  declarations: [PoliticaPrivacidadeComponent]
})
export class PoliticaPrivacidadeModule { }
