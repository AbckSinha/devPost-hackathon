import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { EncryptDecryptService } from 'src/shared/services/encrypt-decrypt.service';
import { ErrorHandlerService } from 'src/shared/services/error-handler.service';
import { SharedService } from 'src/shared/shared.service';
import { environment } from 'src/environments/environment';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';

declare var window: any;
declare var Fingerprint: any;
declare var device: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  resLoginData: any;
  SessionExpired = false;
  submitted = this.commonData.BOOLEAN_VALUES.BOOLEAN_FALSE;
  imgBasePath = environment.images;
  passwordPattern = this.commonData.passwordPattern;
  userIdPattern = this.commonData.userIdPattern;
  mobileOS;
  faceId = false;
  touchId = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private commonData: CommonDataComponent,
    private sharedService: SharedService,
    private EncrDecr: EncryptDecryptService,
    private zone: NgZone,
    private idle: Idle,
    private errorHandler: ErrorHandlerService
  ) {
    if (sessionStorage.getItem('SessionExpired') !== undefined) {
      if (sessionStorage.getItem('SessionExpired') === 'true') {
        this.SessionExpired = true;
      } else if (sessionStorage.getItem('SessionExpired') === 'false') {
        this.sharedService.stopLogin();
        this.stopIdleTimer();
      }
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    localStorage.clear();
    this.isFaceFingerAvailableCheck();
    this.mobileOS = this.sharedService.getMobileOperatingSystem();
  }

  // stop idle timer
  stopIdleTimer() {
    this.idle.stop();
    this.idle.clearInterrupts();
    this.idle.ngOnDestroy();
  }
  /*
   *convenience getter for easy access to form fields
   */
  get formData() {
    return this.loginForm.controls;
  }

  /**
   * Validates user credentials and displays message accordingly
   * @param value user credentials
   */
  onSubmit(value = null) {
    this.submitted = this.commonData.BOOLEAN_VALUES.BOOLEAN_TRUE;
    if (this.loginForm.invalid) {
      return;
    }
    const self = this;
    this.zone.run(() => {
      self.router.navigate(['home']);
    });

  }

  /**
   * redirects to register page
   */
  redirectToRegister() {
    // this.router.navigate(['register']);
  }

  /**
   * redirects to profile maintenance page
   */
  forgotPassword() {
    // this.router.navigate(['forgot-password-main']);
  }

  // Function for allowing fingerprint
  allowFingerFaceprint() {
    if (Fingerprint !== undefined || Fingerprint !== null) {
      Fingerprint.isAvailable((isAvailableSuccess) => {
        const self = this;
        this.zone.run(() => {
          self.allowFaceFingerRecognition(self.mobileOS);
        });
      }, (isAvailableError) => {
        const self = this;
        this.zone.run(() => {
          self.sharedService.showError('Please enable Biometric, TouchID or FaceID on device.');
        });
      });
    }
  }

  // Allow fingerPrint to Login
  allowFingerFace(bioType) {
    const loginData = {
      loginType: '',
      loginToken: ''
    };

    loginData.loginType = bioType;
    const encryptedFingerPrint = this.EncrDecr.set(this.commonData.ENCRYPTKEY, (this.sharedService.UUID || device.uuid));
    loginData.loginToken = encryptedFingerPrint;

    const self = this;
    this.zone.run(() => {
      self.router.navigate(['home']);
    });
  }
  /**
   * If Fingerprint is Available or Not
   */
  allowFaceFingerRecognition(platformType) {
    const self = this;
    Fingerprint.show({
      clientId: 'Fingerprint-Demo', // Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
      clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Necessary for Android encrpytion of keys. Use random secret key.
      disableBackup: true,
      localizedReason: 'Please Authenticate'
    }, (successCallback) => {
      if (self.touchId === true) {
        self.allowFingerFace('fingerPrint');
      } else if (self.faceId === true) {
        self.allowFingerFace('faceId');
      }
    }, (errorCallback) => {
    });
  }

  // Function for allowing fingerprint
  isFaceFingerAvailableCheck() {
    if (Fingerprint !== undefined || Fingerprint !== null) {
      Fingerprint.isAvailable((isAvailableSuccess) => {
        const self = this;
        this.zone.run(() => {
          if (isAvailableSuccess === 'finger') {
            self.touchId = true;
          } else if (isAvailableSuccess === 'face') {
            self.faceId = true;
          }
        });
      }, (isAvailableError) => {
        const self = this;
        this.zone.run(() => {
          if (device.model === 'iPhone10,3' || device.model === 'iPhone10,6' || device.model === 'iPhone11,2'
            || device.model === 'iPhone11,4' || device.model === 'iPhone11,6' || device.model === 'iPhone11,8'
            || device.model === 'iPhone12,1' || device.model === 'iPhone12,3' || device.model === 'iPhone12,5'
            || device.model === 'iPad8,1' || device.model === 'iPad8,2' || device.model === 'iPad8,3' || device.model === 'iPad8,4'
            || device.model === 'iPad8,5' || device.model === 'iPad8,6' || device.model === 'iPad8,7' || device.model === 'iPad8,8') {
            self.faceId = true;
          } else {
            self.touchId = true;
          }
        });
      });
    }
  }
    // Fucntion for sending device ID
    onDeviceReady() {
      const self = this;
      if (device !== undefined && device !== null) {
        self.sharedService.UUID = device.uuid;
      }
    }
}
