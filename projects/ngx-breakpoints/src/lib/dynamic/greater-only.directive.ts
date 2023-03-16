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
import { NgxBreakpoints } from "../breakpoint.types";

@Directive({
  selector: "[greaterOnly]",
})
export class GreaterOnlyDirective implements OnInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  greaterOnly!: keyof NgxBreakpoints;
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.breakpoints$$ = this.breakpoints
      .observeGreater(this.greaterOnly)
      .subscribe((isGreater) => {
        if (isGreater) {
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
