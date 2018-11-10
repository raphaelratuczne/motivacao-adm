import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Palavra } from '../interfaces/palavra';

@Injectable()
export class PalavraProvider {

  private palavraCollection: AngularFirestoreCollection<Palavra>;
  public palavra$: BehaviorSubject<Palavra[]> = new BehaviorSubject([]);

  constructor(private afs: AngularFirestore) {
    this.palavraCollection = this.afs.collection<Palavra>('palavras');

    this.palavraCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a .payload.doc.data() as Palavra;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(palavra => this.palavra$.next(palavra));
  }

  public addPalavra(palavra:string) {
    return this.afs.collection<{palavra:string}>('palavras').add({palavra});
  }

  public updatePalavra(p:Palavra) {
    const doc = this.afs.doc<Palavra>('palavras/'+p.id);
    return doc.update({palavra:p.palavra});
  }

  public deletePalavra(id:string) {
    const doc = this.afs.doc<Palavra>('palavras/'+id);
    return doc.delete();
  }
}
