import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CacheService} from '../../shared/services/cache.service';

// import {HelperService} from '../../shared/services/helper.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {


  constructor(private cache: CacheService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headersConfig: any = {};
    if (req.body instanceof FormData) {
      headersConfig = {};
    } else {
      headersConfig = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }

    const token = this.cache.getCache('token');
    if (token) {
        headersConfig.Authorization = `Bearer ${token}`;
    }

    const request = req.clone({setHeaders: headersConfig});
    return next.handle(request);
  }

}
