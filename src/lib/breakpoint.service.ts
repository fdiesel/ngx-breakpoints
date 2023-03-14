import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NgxBreakpointConfig, NgxBreakpoints } from "./breakpoint.types";

@Injectable({
  providedIn: "root",
})
export class BreakpointService {
  constructor(
    @Inject("config")
    private config: NgxBreakpointConfig,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpoints = config.breakpoints;
    this.mobileBreakpoint = config.mobileBreakpoint;
  }

  private breakpoints: NgxBreakpoints;
  private mobileBreakpoint: keyof NgxBreakpoints;

  public observeDesktopView(): Observable<boolean> {
    return this.observeGreater(this.mobileBreakpoint);
  }

  public observeMobileView(): Observable<boolean> {
    return this.observeLower(this.mobileBreakpoint);
  }

  public observeGreater(size: keyof NgxBreakpoints): Observable<boolean> {
    return this.breakpointObserver
      .observe(this.minWidth(size))
      .pipe(map((breakpointState: BreakpointState) => breakpointState.matches));
  }

  public observeLower(size: keyof NgxBreakpoints): Observable<boolean> {
    return this.breakpointObserver
      .observe(this.maxWidth(size))
      .pipe(map((breakpointState: BreakpointState) => breakpointState.matches));
  }

  private minWidth(size: keyof NgxBreakpoints): string {
    return `(min-width: ${this.breakpoints[size]})`;
  }

  private maxWidth(size: keyof NgxBreakpoints): string {
    return `(max-width: ${this.breakpoints[size]})`;
  }
}
