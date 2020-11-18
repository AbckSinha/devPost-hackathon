import { Injectable } from '@angular/core';
import {
  Request,
  RequestMethod,
  Response
} from '@angular/http';
import { Observable } from 'rxjs';
import { HttpAdapter } from './http.adapter';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/app-config.service';
import { HttpResponseHandlerService } from 'src/shared/services/http-response-handler.service';

/**
 * Supported @Produces media types
 */
export enum MediaType {
  JSON,
  FORM_DATA
}

@Injectable()
export class HttpService {

  public constructor(
    protected http: HttpClient,
    protected configService: ConfigService,
    protected responseHandler: HttpResponseHandlerService) {
  }

  protected getBaseUrl(): string {
    return this.configService.get('api').baseUrl;
  }

  protected getEnvUrl(): string {
    return this.configService.get('api').envUrl;
  }

  protected getDownloadUrl(): string {
    return this.configService.get('api').downloadUrl;
  }
  // tslint:disable-next-line: ban-types
  protected getDefaultHeaders(): Object {
    return null;
  }

  /*
  * Request Interceptor
  *
  * @method requestInterceptor
  * @param {Request} req - request object
  */
  // tslint:disable-next-line: deprecation
  protected requestInterceptor(req: Request) { }

  /*
  * Response Interceptor
  *
  * @method responseInterceptor
  * @param {Response} observableRes - response object
  * @returns {Response} res - transformed response object
  */
// tslint:disable-next-line: ban-types
  protected responseInterceptor(observableRes: Observable<any>, adapterFn?: Function): any {
    return observableRes
      .subscribe(res => HttpAdapter.baseAdapter(res, adapterFn),
        (error) => this.responseHandler.onCatch(error));

  }
}
