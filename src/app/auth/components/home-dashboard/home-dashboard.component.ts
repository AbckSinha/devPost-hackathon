import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';

import { SharedService } from 'src/shared/shared.service';
import { environment } from 'src/environments/environment';
import { BnNgIdleService } from 'bn-ng-idle';
import { ErrorHandlerService } from 'src/shared/services/error-handler.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  username = this.commonData.STRING_VALUES.USER_NAME;
  user: any;
  dealerInfo: any;
  currentUser: any;
  appHeight: number;
  userRole: string;
  imgBasePath = environment.images;
  countryCode = this.commonData.countrycode;
  jwtToken: any;

  constructor(
    private router: Router,
    private commonData: CommonDataComponent,
    private sharedService: SharedService,
    private bnIdle: BnNgIdleService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.sharedService.setTitle('Home');
    this.sharedService.setHeaderOption('Header_Option');
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.dealerInfo = JSON.parse(localStorage.getItem('dealerInfo'));

    if (this.user !== undefined && this.user !== null) {
      this.jwtToken = this.user.jwtToken;
    } else if (this.dealerInfo !== undefined && this.dealerInfo !== null) {
      this.jwtToken = this.dealerInfo.jwtToken;
    }

    if (this.user !== undefined && this.user !== null) {
      this.userRole = this.user.role;
      this.username = this.user.dealerShipName ? this.user.dealerShipName : this.user.salesPersonName;
    } else if (this.dealerInfo !== undefined && this.dealerInfo !== null) {
      this.userRole = this.dealerInfo.role;
      this.username = this.dealerInfo.dealershipName;
    }

    this.appHeight = window.innerHeight - 80;
    // Function for getting dealer vehicle type
    const dealerType = {
      mobileNumber: null
    };

    if (this.user) {
      dealerType.mobileNumber = this.user.mobileNumber;
    } else if (this.dealerInfo) {
      // tslint:disable-next-line: radix
      dealerType.mobileNumber = parseInt((this.countryCode + this.dealerInfo.mobileNumber).replace(/^\++/, ''));
    }

    localStorage.removeItem('customerFiles');
    localStorage.removeItem('guarantorFiles');
    localStorage.removeItem('dealerPrefDetails');
    localStorage.removeItem('trackAppDetails');
  }

  // Apply finance redirection
  applyFinance() {
    this.sharedService.startLoading();
    this.router.navigate(['/finance']);
  }

  // Track finance application
  trackApplication() {
    this.router.navigate(['/finance-tracker/']);
  }

  // Manage salesperson
  manageSalesPerson() {
    this.router.navigate(['manage-sales-person']);
  }

  // Navigate to profile maintenance page
  changeSettings() {
    this.router.navigate(['settings']);
  }

  // Apply Disbursement redirection
  disbursment() {
    this.router.navigate(['/disbursment']);
  }

  // Navigate to settlement page
  settlement() {
    this.router.navigate(['/settlement']);
  }

  tutorials() {
    this.router.navigate(['/video-tutorials']);
  }
}
