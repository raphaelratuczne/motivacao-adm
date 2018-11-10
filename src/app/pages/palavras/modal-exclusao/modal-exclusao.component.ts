import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Palavra } from '../../../interfaces/palavra';

@Component({
  selector: 'app-modal-exclusao',
  templateUrl: './modal-exclusao.component.html',
  styleUrls: ['./modal-exclusao.component.scss']
})
export class ModalExclusaoComponent implements OnInit {

  public palavra: Palavra;

  constructor(public dialogRef: MatDialogRef<ModalExclusaoComponent>, @Inject(MAT_DIALOG_DATA) public data: Palavra) { }

  ngOnInit() {
    this.palavra = {...this.data};
  }

}
