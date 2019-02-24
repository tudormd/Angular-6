import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';


import { CoreModule } from './core/core.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './guard/auth-guard-service';
import { LoginService } from './providers/auth-register-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutes,
    HttpModule,
    LocalStorageModule.forRoot({
      prefix: 'my-localStorage',
      storageType: 'localStorage'
    })
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
