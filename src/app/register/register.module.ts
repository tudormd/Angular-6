import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRouter } from './register.router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatOptionModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RegisterRouter,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,


  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
