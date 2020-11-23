import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpResponseHandlerService } from './services/http-response-handler.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public UUID;

  public title = new BehaviorSubject('');

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  private subMessageSource = new BehaviorSubject('');
  currentSubMessage = this.subMessageSource.asObservable();
  private headerFlag = new BehaviorSubject('');
  headerCheckFlag = this.headerFlag.asObservable();

  private loadingFlag = new BehaviorSubject('');
  loadingCheckFlag = this.loadingFlag.asObservable();

  private loginFlag = new BehaviorSubject('');
  loginCheckFlag = this.loginFlag.asObservable();

  constructor(
    private toastr: ToastrService
  ) { }

  // Function for setting up a title
  setTitle(title) {
    this.title.next(title);
  }

  // Function for change success message
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  // Function for change success sub message
  changeSubMessage(message: string) {
    this.subMessageSource.next(message);
  }

  // function to publish flag n successful login
  startLogin() {
    this.loginFlag.next('true');
  }

  // function to publish flag n successful login
  stopLogin() {
    this.loginFlag.next('false');
  }


  // Function for setting up a header
  setHeaderOption(type) {
    this.headerFlag.next(type);
  }

  // Function for showing loader
  startLoading() {
    this.loadingFlag.next('true');
  }

  // Function for hide loader
  stopLoading() {
    this.loadingFlag.next('false');
  }

  // Toast message
  showError(msg) {
    this.toastr.error(msg);
  }

  // Function for detecting device OS
  getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone';
    }

    if (/android/i.test(userAgent)) {
      return 'Android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return 'iOS';
    }

    return 'unknown';
  }

  closePopupOnTimeOut() {
    const clearDateOverlay = document.getElementsByClassName('modal')[0];
    if (clearDateOverlay !== undefined || clearDateOverlay != null) {
      const pickerEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false
      });
      clearDateOverlay.dispatchEvent(pickerEvent);
    }
  }
}
