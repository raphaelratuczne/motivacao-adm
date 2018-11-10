import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { map, share } from 'rxjs/operators';

import { Descricao } from '../interfaces/descricao';

@Injectable()
export class DescricaoProvider {

  private descDoc: AngularFirestoreDocument<Descricao>;
  public descricao$: Observable<Descricao>;

  constructor(private afs: AngularFirestore) {
    this.descDoc = this.afs.doc<Descricao>('descricoes/descricoes');
    this.descricao$ = this.descDoc.valueChanges();
  }

  public updateDescricoes(desc:Descricao) {
    return this.descDoc.update(desc);
  }

}
