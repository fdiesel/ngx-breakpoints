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
  selector: '[ngxBPMobileClass]',
})
export class MobileClassDirective implements OnInit, OnDestroy {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private breakpoints: BreakpointService
  ) {}

  @Input()
  ngxBPMobileClass: string | string[] = [];
  breakpoints$$?: Subscription;

  ngOnInit(): void {
    let classList: string[];
    if (typeof this.ngxBPMobileClass === 'string') {
      classList = this.ngxBPMobileClass.split(' ');
    } else if (typeof this.ngxBPMobileClass === 'object') {
      classList = this.ngxBPMobileClass;
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
