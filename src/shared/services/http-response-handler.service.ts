import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseHandlerService {

  constructor(
    private toastr: ToastrService
    ) { }

  /*
  * Global http error handler.
  *
  * @param error
  * @param source
  * @returns {ErrorObservable}
  */
  public onCatch(response: any) {
    switch (response) {
      case 400:
        this.handleBadRequest(response);
        break;

      case 401:
        this.handleUnauthorized(response);
        break;

      case 403:
        this.handleForbidden();
        break;

      case 404:
        this.handleNotFound(response);
        break;

      case 500:
        this.handleServerError();
        break;

      case 0:
        this.handleServerError();
        break;

      default:
        break;
    }

  }

  /*
   * Shows errors when server response status is 400
   *
   * @param error
   */
  private handleBadRequest(responseBody: any): void {
    if (responseBody._body) {
      try {
        const bodyParsed = responseBody.json();
        this.handleErrorMessages(bodyParsed);
      } catch (error) {
        this.handleServerError();
      }
    } else { this.handleServerError(); }
  }

  /*
   * Shows console logs when server response status is 401
   *
   * @param responseBody
   */
  private handleUnauthorized(responseBody: any): void {
    this.toastr.error('Server is not Available!');
  }

  /**
   * Shows console logs when server response status is 403
   */
  private handleForbidden(): void {
    this.toastr.error('Server is not Available!');
  }

  /*
   * Shows console logs when server response status is 404
   *
   * @param responseBody
   */
  private handleNotFound(responseBody: any): void {
    this.toastr.error('Server is not Available!');
  }

  /**
   * Shows console logs when server response status is 500
   */
  private handleServerError(): void {
    this.toastr.error('Server is not Available!');
  }

  /*
   * Parses server response and shows notification errors with translated messages
   *
   * @param response
   */
  private handleErrorMessages(response: any): void {
    if (!response) { return; }

    for (const key of Object.keys(response)) {
      if (Array.isArray(response[key])) {
        response[key].forEach((value) => console.log(value));
      }
    }
  }
}
