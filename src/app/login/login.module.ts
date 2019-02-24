import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouter } from './login-router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatOptionModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRouter,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
