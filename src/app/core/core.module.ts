import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../Core/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class CoreModule {}
