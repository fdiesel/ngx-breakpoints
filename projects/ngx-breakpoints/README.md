# NgxBreakpoints
Breakpoint utilities

## Installation
NgxBreakpoints requires `@angular/cdk`

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
<div [desktopAttr]="[['id', '1']]">Desktop Attr</div>
<div desktopClass="one two">Desktop Class</div>
<div [desktopClass]="['one', 'two']">Desktop Class</div>
<div *desktopOnly>Desktop Only</div>
<div [mobileAttr]="[['id', '1']]">Mobile Attr</div>
<div mobileClass="one two">Mobile Class</div>
<div [mobileClass]="['one', 'two']">Mobile Class</div>
<div *mobileOnly>Mobile Only</div>
<div>
  <div desktopMaxWidth="420px" style="background-color: black; color: white;">Desktop Max Width</div>
</div>
<div *greaterOnly="'lg'"> Greater LG</div>
<div *lowerOnly="'lg'">Lower LG</div>

```
