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
  selector: "[ngxBPDesktopMaxWidth]",
})
export class DesktopMaxWidthDirective implements OnInit, OnDestroy {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  ngxBPDesktopMaxWidth?: string;
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "width", "100%");
    this.breakpoints$$ = this.breakpoints
      .observeMobileView()
      .subscribe((isMobileView: boolean) => {
        if (isMobileView) {
          this.renderer.removeStyle(this.element.nativeElement, "max-width");
        } else {
          this.renderer.setStyle(
            this.element.nativeElement,
            "max-width",
            this.ngxBPDesktopMaxWidth
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpoints$$?.unsubscribe();
  }
}
