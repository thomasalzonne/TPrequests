import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NetworkService } from '../network/network.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  
  constructor(private networkService:NetworkService){}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      tap((response : HttpEvent<null>) => {
        console.log(response)
        if(response.type === 4){
          this.networkService.addMessage({
            message : 'ok',
            path: httpRequest.url,
            method : httpRequest.method,
            status : response.status
         })
        }
      }
    ));
  }
}