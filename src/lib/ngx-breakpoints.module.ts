import { ModuleWithProviders, NgModule } from "@angular/core";
import { NgxBreakpointConfig } from "./breakpoint-config";
import { DesktopAttrListDirective } from "./desktop-attr-list.directive";
import { DesktopClassDirective } from "./desktop-class.directive";
import { DesktopMaxWidthDirective } from "./desktop-max-width.directive";
import { DesktopOnlyDirective } from "./desktop-only.directive";
import { MobileAttrListDirective } from "./mobile-attr-list.directive";
import { MobileClassDirective } from "./mobile-class.directive";
import { MobileOnlyDirective } from "./mobile-only.directive";

@NgModule({
  declarations: [
    DesktopAttrListDirective,
    DesktopClassDirective,
    DesktopMaxWidthDirective,
    DesktopOnlyDirective,
    MobileAttrListDirective,
    MobileClassDirective,
    MobileOnlyDirective,
  ],
  imports: [],
  exports: [
    DesktopAttrListDirective,
    DesktopClassDirective,
    DesktopMaxWidthDirective,
    DesktopOnlyDirective,
    MobileAttrListDirective,
    MobileClassDirective,
    MobileOnlyDirective,
  ],
})
export class NgxBreakpointsModule {
  static forRoot(
    config: NgxBreakpointConfig
  ): ModuleWithProviders<NgxBreakpointsModule> {
    return {
      ngModule: NgxBreakpointsModule,
      providers: [
        NgxBreakpointsModule,
        { provide: "config", useValue: config },
      ],
    };
  }
}
