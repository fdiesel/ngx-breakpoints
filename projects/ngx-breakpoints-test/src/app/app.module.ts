import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBreakpointsModule } from 'ngx-breakpoints';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxBreakpointsModule.forRoot({
      breakpoints: {
        xs: '0',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      mobileBreakpoint: 'lg',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
