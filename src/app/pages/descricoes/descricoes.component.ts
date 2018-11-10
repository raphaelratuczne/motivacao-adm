import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

import { DescricaoProvider } from '../../providers/descricao.provider';

import { Descricao } from '../../interfaces/descricao';

@Component({
  selector: 'app-descricoes',
  templateUrl: './descricoes.component.html',
  styleUrls: ['./descricoes.component.scss'],
  providers: [DescricaoProvider]
})
export class DescricoesComponent implements OnInit {

  public descricao$: Observable<Descricao>;
  public form: FormGroup;

  constructor(private descricaoProvider:DescricaoProvider, private snackBar: MatSnackBar) {
    this.descricao$ = this.descricaoProvider.descricao$;
  }

  ngOnInit() {
    this.form = new FormGroup({
      gratidao: new FormControl(),
      objetivo: new FormControl(),
      orgulho: new FormControl(),
      paixao: new FormControl(),
      palavra: new FormControl(),
      plano: new FormControl(),
      roteiro: new FormControl()
    });

    this.descricao$.subscribe(d => {
      this.form.patchValue(d);
    });
  }

  salvar() {
    this.descricaoProvider.updateDescricoes(this.form.value).then(() => {
      this.snackBar.open('As descrições foram alteradas', 'Ok', { duration: 2000 });
    });
  }
}
