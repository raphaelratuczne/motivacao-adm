import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { first } from 'rxjs/operators';

import { TabelaDataSource } from './frases-datasource';

import { FraseProvider } from '../../providers/frase.provider';

import { ModalFraseComponent } from './modal-frase/modal-frase.component';

import { Frase } from '../../interfaces/frase';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.scss'],
  providers: [FraseProvider]
})
export class FrasesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TabelaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['index', 'frase', 'actions'];

  constructor(private fraseProvider:FraseProvider, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new TabelaDataSource(this.paginator, this.sort, this.fraseProvider.frases$);
  }

  editar(data) {
    const dialogRef = this.dialog.open(ModalFraseComponent, {
      width: '500px',
      data: data
    });

    dialogRef.afterClosed().pipe(first()).subscribe((result:Frase) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.fraseProvider.updateFrase(result);
      }
    });
  }

  adicionar() {
    const dialogRef = this.dialog.open(ModalFraseComponent, {
      width: '500px',
      data: {id: null, index: null, frase: ''}
    });

    dialogRef.afterClosed().pipe(first()).subscribe((result:Frase) => {
      console.log('The dialog was closed', result);
      if (result && result.frase) {
        this.fraseProvider.addFrase(result.frase);
      }
    });
  }
}
