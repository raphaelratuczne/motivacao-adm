import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { first } from 'rxjs/operators';

import { PalavrasDataSource } from './palavras-datasource';

import { PalavraProvider } from '../../providers/palavra.provider';

import { ModalPalavraComponent } from './modal-palavra/modal-palavra.component';
import { ModalExclusaoComponent } from './modal-exclusao/modal-exclusao.component';

import { Palavra } from '../../interfaces/palavra';

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.scss'],
  providers: [PalavraProvider]
})
export class PalavrasComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PalavrasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['palavra', 'editar', 'excluir'];

  constructor(private palavraProvider:PalavraProvider, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new PalavrasDataSource(this.paginator, this.sort, this.palavraProvider.palavra$);
  }

  editar(data) {
    const dialogRef = this.dialog.open(ModalPalavraComponent, {
      width: '500px',
      data: data
    });

    dialogRef.afterClosed().pipe(first()).subscribe((palavra:Palavra) => {
      // console.log(palavra);
      if (palavra) {
        this.palavraProvider.updatePalavra(palavra);
      }
    });
  }

  adicionar() {
    const dialogRef = this.dialog.open(ModalPalavraComponent, {
      width: '500px',
      data: {id: null, palavra: ''}
    });

    dialogRef.afterClosed().pipe(first()).subscribe((result:Palavra) => {
      // console.log('The dialog was closed', result);
      if (result && result.palavra) {
        this.palavraProvider.addPalavra(result.palavra);
      }
    });
  }

  excluir(data) {
    const dialogRef = this.dialog.open(ModalExclusaoComponent, {
      // width: '500px',
      data: data
    });

    dialogRef.afterClosed().pipe(first()).subscribe((palavra:Palavra) => {
      // console.log(palavra);
      if (palavra) {
        this.palavraProvider.deletePalavra(palavra.id);
      }
    });
  }
}
