import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
