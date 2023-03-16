import {
  Directive,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointService } from "../breakpoint.service";

@Directive({
  selector: "[mobileOnly]",
})
export class MobileOnlyDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private breakpoints: BreakpointService
  ) {}

  breakpoint$$?: Subscription;

  ngOnInit(): void {
    this.breakpoint$$ = this.breakpoints
      .observeMobileView()
      .subscribe((isMobileView) => {
        if (isMobileView) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpoint$$?.unsubscribe();
  }
}
