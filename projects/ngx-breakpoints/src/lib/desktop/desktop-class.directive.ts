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
  selector: "[desktopClass]",
})
export class DesktopClassDirective implements OnInit, OnDestroy {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  desktopClass: string | string[] = [];
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    let classList: string[];
    if (typeof this.desktopClass === "string") {
      classList = this.desktopClass.split(" ");
    } else if (typeof this.desktopClass === "object") {
      classList = this.desktopClass;
    }
    this.breakpoints$$ = this.breakpoints
      .observeDesktopView()
      .subscribe((isDesktopView: boolean) => {
        if (isDesktopView) {
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
