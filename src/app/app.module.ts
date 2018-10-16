import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  // MatButtonModule,
  // MatGridListModule,
  // MatCardModule,
  // MatMenuModule,
  // MatTableModule,
  // MatPaginatorModule,
  // MatSortModule
} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { configFireBase } from './const';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(configFireBase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // MatButtonModule,
    // MatGridListModule,
    // MatCardModule,
    // MatMenuModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
