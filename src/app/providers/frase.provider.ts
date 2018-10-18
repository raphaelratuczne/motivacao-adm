import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { Frase } from '../interfaces/frase';

@Injectable()
export class FraseProvider {

  private frasesCollection: AngularFirestoreCollection<Frase>;
  public frases$: BehaviorSubject<Frase[]> = new BehaviorSubject([]);

  constructor(private afs: AngularFirestore) {
    this.frasesCollection = this.afs.collection<Frase>('frases');

    this.frasesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Frase;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(frases => this.frases$.next(frases));
  }

  public addFrase(f:string) {
    this.afs.collection<{index:number, frase:string}>('frases', ref => ref.orderBy('index', 'desc').limit(1))
      .snapshotChanges()
      .pipe(first())
      .subscribe(actions => actions.map(a => {
        let novoIndex = a.payload.doc.data().index;
        novoIndex++;
        this.afs.collection<{index:number, frase:string}>('frases').add({
          index: novoIndex,
          frase: f
        });
      }));
  }

  public updateFrase(f:Frase) {
    const doc = this.afs.doc<Frase>('frases/'+f.id);
    doc.update({
      index: f.index,
      frase: f.frase
    });
  }

}
