import { ModuleWithProviders, NgModule } from "@angular/core";
import { GreaterOnlyDirective, LowerOnlyDirective } from "../public-api";
import { NgxBreakpointConfig } from "./breakpoint.type";
import { DesktopAttrListDirective } from "./desktop/desktop-attr-list.directive";
import { DesktopClassDirective } from "./desktop/desktop-class.directive";
import { DesktopMaxWidthDirective } from "./desktop/desktop-max-width.directive";
import { DesktopOnlyDirective } from "./desktop/desktop-only.directive";
import { MobileAttrListDirective } from "./mobile/mobile-attr-list.directive";
import { MobileClassDirective } from "./mobile/mobile-class.directive";
import { MobileOnlyDirective } from "./mobile/mobile-only.directive";

@NgModule({
  declarations: [
    DesktopAttrListDirective,
    DesktopClassDirective,
    DesktopMaxWidthDirective,
    DesktopOnlyDirective,
    GreaterOnlyDirective,
    LowerOnlyDirective,
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
    GreaterOnlyDirective,
    LowerOnlyDirective,
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
