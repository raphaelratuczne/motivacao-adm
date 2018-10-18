import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Frase } from '../../../interfaces/frase';

@Component({
  selector: 'app-modal-frase',
  templateUrl: './modal-frase.component.html',
  styleUrls: ['./modal-frase.component.scss']
})
export class ModalFraseComponent implements OnInit {

  public frase: Frase;

  constructor(public dialogRef: MatDialogRef<ModalFraseComponent>, @Inject(MAT_DIALOG_DATA) public data: Frase) { }

  ngOnInit() {
    this.frase = {...this.data};
  }

}
