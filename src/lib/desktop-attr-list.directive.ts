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
  selector: '[ngxBPDesktopAttr]',
})
export class DesktopAttrListDirective implements OnInit, OnDestroy {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  ngxBPDesktopAttr: string[][] = [];
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    this.breakpoints$$ = this.breakpoints
      .observeDesktopView()
      .subscribe((isDesktopView: boolean) => {
        if (isDesktopView) {
          this.ngxBPDesktopAttr.forEach((attr) =>
            this.renderer.removeAttribute(this.element.nativeElement, attr[0])
          );
        } else {
          this.ngxBPDesktopAttr.forEach((attr) =>
            this.renderer.setAttribute(
              this.element.nativeElement,
              attr[0],
              attr[1]
            )
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpoints$$?.unsubscribe();
  }
}
