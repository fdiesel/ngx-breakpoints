import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointService } from './breakpoint.service';

@Directive({
  selector: '[ngxBPMobileAttr]',
})
export class MobileAttrListDirective implements OnInit, OnDestroy {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  ngxBPMobileAttr: string[][] = [];
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.breakpoints$$ = this.breakpoints
      .observeMobileView()
      .subscribe((isMobileView: boolean) => {
        if (isMobileView) {
          this.ngxBPMobileAttr.forEach((attr) =>
            this.renderer.setAttribute(
              this.element.nativeElement,
              attr[0],
              attr[1]
            )
          );
        } else {
          this.ngxBPMobileAttr.forEach((attr) =>
            this.renderer.removeAttribute(this.element.nativeElement, attr[0])
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpoints$$?.unsubscribe();
  }
}
