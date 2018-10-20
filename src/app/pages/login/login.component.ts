import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public pass: string;

  public showSpinner = false;

  public error = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    const s$ = new Subject();
    this.afAuth.authState.pipe(takeUntil(s$)).subscribe(au => {
      if (au) {
        s$.next();
        s$.complete();
        this.router.navigate(['dashboard']);
      }
    });
  }

  public login() : void {
    this.showSpinner = true;
    this.error  = '';
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then(() => this.showSpinner = false)
      .catch(e => {
        this.showSpinner = false;
        console.log(e);
        this.error = e.message;
      });
  }

}
