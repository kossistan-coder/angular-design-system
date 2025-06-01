import { HttpInterceptorFn } from '@angular/common/http';

export const xAppTokenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
