export type NgxBreakpoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type NgxBreakpointConfig = {
  breakpoints: NgxBreakpoints;
  mobileBreakpoint: keyof NgxBreakpoints;
};
