import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Palavra } from '../../../interfaces/palavra';

@Component({
  selector: 'app-modal-palavra',
  templateUrl: './modal-palavra.component.html',
  styleUrls: ['./modal-palavra.component.scss']
})
export class ModalPalavraComponent implements OnInit {

  public palavra: Palavra;

  constructor(public dialogRef: MatDialogRef<ModalPalavraComponent>, @Inject(MAT_DIALOG_DATA) public data: Palavra) { }

  ngOnInit() {
    this.palavra = {...this.data};
  }

}
