import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBreakpointConfig, NgxBreakpointsModule } from 'ngx-breakpoints';

import { AppComponent } from './app.component';

const config: NgxBreakpointConfig = {
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  mobileBreakpoint: 'md',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBreakpointsModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
