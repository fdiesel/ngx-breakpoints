import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointService } from "../breakpoint.service";

@Directive({
  selector: "[mobileClass]",
})
export class MobileClassDirective implements OnInit, OnDestroy {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  mobileClass: string | string[] = [];
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    let classList: string[];
    if (typeof this.mobileClass === "string") {
      classList = this.mobileClass.split(" ");
    } else if (typeof this.mobileClass === "object") {
      classList = this.mobileClass;
    }
    this.breakpoints$$ = this.breakpoints
      .observeMobileView()
      .subscribe((isMobileView: boolean) => {
        if (isMobileView) {
          classList.forEach((cls) =>
            this.renderer.addClass(this.element.nativeElement, cls)
          );
        } else {
          classList.forEach((cls) =>
            this.renderer.removeClass(this.element.nativeElement, cls)
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpoints$$?.unsubscribe();
  }
}
