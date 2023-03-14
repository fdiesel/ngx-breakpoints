# NgxBreakpoints
Breakpoint utilities

## Installation
NgxBreakpoints requires on `@angular/cdk`

```shell
npm install @angular/cdk
npm install ngx-breakpoints
```

## Usage

```js
import { NgxBreakpointConfig, NgxBreakpointsModule } from 'ngx-breakpoints';

const config: NgxBreakpointConfig = {
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  mobileBreakpoint: 'lg',
};

@NgModule({
  imports: [NgxBreakpointsModule.forRoot(config)],
})
export class AppModule {}
```

```html
<div [ngxBPDesktopAttr]="[['id', '1']]">Desktop Attr</div>
<div ngxBPDesktopClass="one two">Desktop Class</div>
<div [ngxBPDesktopClass]="['one', 'two']">Desktop Class</div>
<div *ngxBPDesktopOnly>Desktop Only</div>
<div [ngxBPMobileAttr]="[['id', '1']]">Mobile Attr</div>
<div ngxBPMobileClass="one two">Mobile Class</div>
<div [ngxBPMobileClass]="['one', 'two']">Mobile Class</div>
<div *ngxBPMobileOnly>Mobile Only</div>
<div>
  <div ngxBPDesktopMaxWidth="420px" style="background-color: black; color: white;">Desktop Max Width</div>
</div>
<div *ngxBPGreaterOnly="'lg'"> Greater LG</div>
<div *ngxBPLowerOnly="'lg'">Lower LG</div>
```
