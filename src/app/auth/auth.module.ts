import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRoutes } from './lazyloader.routes';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreModule } from '../core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    DashboardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    CoreModule,
    MatIconModule,
    MatTableModule

  ],
  declarations: [AuthComponent, AuthPopupComponent],
  providers: [],
  entryComponents: [AuthPopupComponent]


})
export class AuthModule { }
