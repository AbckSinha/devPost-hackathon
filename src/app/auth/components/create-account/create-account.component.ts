import { Component, OnInit, ElementRef, ViewChild, AfterContentChecked, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { MustMatch } from 'src/shared/services/must-match.validator';
import { HttpResponseHandlerService } from '../../../../shared/services/http-response-handler.service';
import { SharedService } from 'src/shared/shared.service';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { ModalComponent } from 'src/app/modal-component/modal-component.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
// import { UseridMatch } from 'src/shared/services/compare-userid-password';
import { environment } from 'src/environments/environment';
import { EncryptDecryptService } from 'src/shared/services/encrypt-decrypt.service';
import { ErrorHandlerService } from 'src/shared/services/error-handler.service';
import { UseridMatch } from 'src/shared/services/compare-userid-password';
import { MustMatch } from 'src/shared/services/must-match.validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})

export class CreateAccountComponent implements OnInit {
  registerForm: FormGroup;
  submitted = this.commonData.BOOLEAN_VALUES.BOOLEAN_FALSE;
  registerMsg: string;
  countrycode = this.commonData.countrycode;
  passwordPattern = this.commonData.passwordPattern;
  dealerNumberPattern = '^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_-]+$';
  mobileNumberPattern = this.commonData.mobileNumberPattern;
  userIdPattern = this.commonData.userIdPattern;
  imgBasePath = environment.images;
  appPosition = 'absolute';
  contentHeight: number;
  buttonWrapperHeight: number;
  appHeight: number;
  formHeight: number;
  overflow: string;

  title = this.commonData.createAccountForm.title;

  @ViewChild('content',{static:true}) contentView: ElementRef;
  @ViewChild('buttonWrapper',{static:true}) buttonView: ElementRef;
  @ViewChild('mobileNo',{static:true}) mobileNo: ElementRef;
  @HostListener('window:resize', ['$event'])

  onResize(event) {
    // if (window.innerHeight - 130 > this.contentHeight) {
    //   this.appPosition = 'absolute';
    // } else {
    //   this.appPosition = 'relative';
    //   this.appHeight = this.contentHeight + this.buttonWrapperHeight;
    // }
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpResponseHandler: HttpResponseHandlerService,
    private commonData: CommonDataComponent,
    private sharedService: SharedService,
    private modal: NgbModal,
    private toastr: ToastrService,
    private EncrDecr: EncryptDecryptService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.registerForm = this.formBuilder.group({
      mobileNumber: ['',[Validators.required, Validators.minLength(9), Validators.maxLength(10), Validators.pattern(this.mobileNumberPattern)]],
      userName: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(32), Validators.pattern(this.userIdPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern), this.passwordCheck]],
      confirmPassword: ['', Validators.required],
      agreementCheck: ['', Validators.required]
    },
      {
        validator: [MustMatch('password', 'confirmPassword'), UseridMatch('userName', 'password')]
      }
    );

    this.sharedService.setTitle('Register');
    this.sharedService.setHeaderOption('Header_No_Option');
    // this.onChanges();

    this.overflow = 'auto';
    this.contentHeight = this.contentView.nativeElement.offsetHeight;
    this.buttonWrapperHeight = this.buttonView.nativeElement.offsetHeight;
    this.formHeight = window.innerHeight - 180;
    // if (window.innerHeight - 170 > this.contentHeight) {
    //   this.appPosition = 'absolute';
    // } else {
    //   this.appPosition = 'relative';
    //   this.appHeight = this.contentHeight + this.buttonWrapperHeight;
    // }
  }

  // Function for checking password
  passwordCheck(epin: FormControl) {
    const epinCharArray = epin.value;
    let asciiCode = 0;
    let previousAsciiCode = 0;
    let numSeqcount = 0;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < epinCharArray.length; i++) {
      asciiCode = epinCharArray[i].charCodeAt(0);
      if ((previousAsciiCode + 1) === asciiCode) {
        numSeqcount++;
        if (numSeqcount >= 2) {
          return {
            key: true
          };
        }
      } else {
        numSeqcount = 0;
      }
      previousAsciiCode = asciiCode;
    }
    return null;
  }



  /*
   *convenience getter for easy access to form fields
   */
  get formData() {
    return this.registerForm.controls;
  }

  /**
   * validates form data and displays message accordingly
   * @param values registration form data
   */
  continue(values) {
    this.submitted = this.commonData.BOOLEAN_VALUES.BOOLEAN_TRUE;
    if (this.registerForm.invalid) {
      return;
    }

    if (this.registerForm.valid) {

      const dealers = {
        userName: '',
        mobileNumber: '',
        password: ''
      };
      if (values !== undefined && values !== null) {
        dealers.userName = values.userName;
        values.mobileNumber = values.mobileNumber.replace(/^0+/, '');
        dealers.mobileNumber = this.countrycode + values.mobileNumber;
        const encryptedPwd = this.EncrDecr.set(this.commonData.ENCRYPTKEY, values.password);
        dealers.password = encryptedPwd;
      }
      this.sharedService.changeMessage('Onboarding Successful!');
      this.sharedService.changeSubMessage('You have been registered. Please Login to continue');
      alert('registration Form'+dealers);
      this.router.navigateByUrl('success-page');
    }
  }

  // Navigates to previous page by url
  goBack() {
    this.router.navigate(['login']);
  }

  /**
   * displays terms and conditions in a separate model
   */
  openTerms() {
    // const modalRef = this.modal.open(ModalComponent);
    // modalRef.componentInstance.title = 'Terms & Conditions';
    // modalRef.componentInstance.content = 'dealerTnC';
  }

  // Toast message
  showError(msg) {
    this.toastr.error(msg);
  }
}
