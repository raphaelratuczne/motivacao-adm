import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints/*, BreakpointState*/ } from '@angular/cdk/layout';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public logado = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(au => {
      this.logado = au ? true : false;
      // console.log('au', au);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

}
