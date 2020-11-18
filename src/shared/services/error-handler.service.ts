import { Injectable, NgZone } from '@angular/core';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';
import { HttpResponseHandlerService } from './http-response-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private sharedService: SharedService,
    private toastr: ToastrService,
    private httpResponseHandler: HttpResponseHandlerService, private zone: NgZone) { }

  public serverError(error) {
    this.sharedService.stopLoading();
    if (error !== undefined && error !== null) {
      const self = this;
      this.zone.run(() => {
        error.message ? this.showError(error.message) : self.httpResponseHandler.onCatch(error.status);
      });
    }
  }

  /*
  * Toast message
  */
  showError(msg) {
    this.toastr.error(msg);
  }
}
