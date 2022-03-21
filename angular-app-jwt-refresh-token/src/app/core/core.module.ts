import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FakeBackendInterceptor } from './interceptors/fake-backend';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [],
  providers: [
    CookieService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },

  ],
  exports: [],
})
export class CoreModule {
  constructor(
  ) {
  }
}
