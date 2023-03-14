import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointService } from "../breakpoint.service";
import { NgxBreakpoints } from "../breakpoint.type";

@Directive({
  selector: "[ngxBPLowerOnly]",
})
export class LowerOnlyDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  ngxBPLowerOnly!: keyof NgxBreakpoints;
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.breakpoints$$ = this.breakpoints
      .observeLower(this.ngxBPLowerOnly)
      .subscribe((isLower) => {
        if (isLower) {
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
