import { ChangeDetectorRef, Component, OnInit, NgZone } from '@angular/core';
import { SharedService } from 'src/shared/shared.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { EncryptDecryptService } from 'src/shared/services/encrypt-decrypt.service';

import { Router } from '@angular/router';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { ToastrService } from 'ngx-toastr';

declare var navigator: any;
declare var StatusBar: any;
declare var IRoot: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = ' Video Tutorial';
  headerOption: boolean;
  loading: boolean;
  lastForegroundTime;
  mobileOS: string;

  constructor(
    public router: Router,
    private sharedService: SharedService,
    private idle: Idle,
    private changeDetection: ChangeDetectorRef,
    private commonData: CommonDataComponent,
    private zone: NgZone,
    private toastr: ToastrService,
    private EncrDecr: EncryptDecryptService
  ) {
  }

  ngOnInit() {
    if (navigator.connection.type === 'none') {
      this.toastr.error('Please check your Internet Connection');
    }
    this.mobileOS = this.sharedService.getMobileOperatingSystem();
    if (this.mobileOS === 'Android' || this.mobileOS === 'iOS') {
      document.addEventListener('deviceready', () => {
        IRoot.isRooted(
          (data) => {
            if (data === true) {
              if (this.mobileOS === 'Android') {
                navigator.app.exitApp();
              } else {
                this.zone.run(() => {
                  this.router.navigateByUrl('finance/broken-page');
                });
              }
            }
          }
        );
      }, false);
    }
    document.addEventListener('deviceready', () => {
      if (this.mobileOS === 'iOS') {
        StatusBar.styleDefault();
      }
    }, false);

    this.sharedService.loginCheckFlag.subscribe(flag => {
      if (flag === 'true') {
        this.idelTimeOut();
      }
      this.changeDetection.detectChanges();
    });
    this.sharedService.headerCheckFlag.subscribe(flag => {
      if (flag === 'Header_Option') {
        this.headerOption = true;
      } else {
        this.headerOption = false;
      }
      this.changeDetection.detectChanges();
    });
    this.sharedService.loadingCheckFlag.subscribe(flag => {
      if (flag === 'true') {
        this.loading = true;
      } else {
        this.loading = false;
      }
    });
    this.backButtonPress();
    localStorage.setItem('windowHeight', window.innerHeight.toString());
  }


  backButtonPress() {
    // backbutton event handler -- only for login page
    document.addEventListener('backbutton', () => {
      if (window.location.href === 'file:///android_asset/www/#/login') {
        navigator.app.exitApp();
      }
    }, false);
  }

  // Function call on time out
  idelTimeOut() {
    this.idle.setIdle(10);
    this.idle.setTimeout(this.commonData.SESSIONIDLETIME);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onTimeoutWarning.subscribe((countdown: number) => {
    });
    this.idle.onTimeout.subscribe(() => {
      this.performTimeOut();
    });
    this.idle.watch();
  }

  // function to call logout to backend
  sessionLogout(isIdle?) {
    this.sharedService.stopLogin();
    this.sharedService.closePopupOnTimeOut();
    sessionStorage.setItem('SessionExpired', 'true');
    this.zone.run(() => {
      this.router.navigate(['login']);
    });
    localStorage.clear();
    // this.headerOptionsComponent.logout();
  }

  // stop idle timer
  stopIdleTimer() {
    this.idle.stop();
    this.idle.clearInterrupts();
    this.idle.ngOnDestroy();
  }

  // Function for perform logout action
  performTimeOut() {
    this.stopIdleTimer();
    this.sessionLogout();
  }
}
