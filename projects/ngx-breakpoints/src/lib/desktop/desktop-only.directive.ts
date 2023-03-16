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
  selector: "[desktopOnly]",
})
export class DesktopOnlyDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private breakpoints: BreakpointService
  ) {}

  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.breakpoints$$ = this.breakpoints
      .observeDesktopView()
      .subscribe((isDesktopView) => {
        if (isDesktopView) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpoints$$?.unsubscribe();
  }
}
