import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-data',
  templateUrl: './common-data.component.html',
  styleUrls: ['./common-data.component.scss']
})
export class CommonDataComponent implements OnInit {
  BOOLEAN_VALUES = {
    BOOLEAN_TRUE: true,
    BOOLEAN_FALSE: false
  };
  STRING_VALUES = {
    STRING_TRUE: 'true',
    STRING_FALSE: 'false',
    NULL: null,
    USER_NAME: ''
  };
  yesNo = ['Yes', 'No'];
  countrycode = '+60';
  // passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#]).{8,20}$';
  passwordPattern = '^[A-Za-z0-9 _(),\./\'\‘\’@*#+-]*$';
  userIdPattern = '^(?![0-9]*$)[a-zA-Z0-9]+$';
  userNamePattern = '^[A-Za-z0-9 _@\'\‘\’./]*[A-Za-z@\'\‘\’./]+[A-Za-z0-9 _@\'\‘\’./]*$';
  mobileNumberPattern = '^[0-9]+$';
  nricNumberPattern = '^([0-9]{2}((?!00)(((0)[0-9])|((1)[0-2])))((?!00)([0-2][0-9]|3[0-1]))[-]?[0-9]{2}[-]?[0-9]{4})$';
  guarantorResponseArray = ['Yes', 'No'];
  financingTenureRange = ['6', '12', '18', '24', '30', '36', '42', '48', '54', '60', '66', '72', '78', '84', '90', '96', '102', '108'];
  rateTypeList = ['Fixed rate', 'Variable rate'];
  productTypeList = ['Conventional', 'Islamic'];
  vehicleTypeList = ['New', 'Unregistered Recon', 'Used'];
  staticCountry = '+6';
  emailIdPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  engineChasisPattern = '^[A-Za-z0-9_*-@/.\'\‘\’]*$';
  registrationNoPattern = '^[A-Za-z0-9 -]*$';
  addressPattern = '^[A-Za-z0-9 _(),\./\'\‘\’@*#+-]*$';
  employerNamePattern = '^[A-Za-z0-9 -_@\'\‘\’./^*,\&]*[A-Za-z@\'\‘\’./^*-,\&]+[A-Za-z0-9 _(),\&.^*-@\'\‘\’./\]*$';
  decimalPattern = '[0-9]+(\.[0-9][0-9]?)?';

  createAccountForm = {
    title: 'Create Account',
    subTitle: 'Fill in your details.',
    mobileNumber: {
      label: 'Mobile Number',
      requiredMsg: 'Mobile Number is required',
      minLengthMsg: 'Mobile Number must be atleast 10 characters long',
      maxLengthMsg: 'Mobile Number must be atleast 10 characters long',
      patternMsg: 'Mobile Number must be numeric'
    },
    userId: {
      label: 'Enter user ID',
    }
  };

  otpForm = {
    // tslint:disable-next-line: max-line-length
    lastAttemptMsg: 'If you still do not receive your OTP after 60 seconds, please try again later. The SMS network may be experiencing heavy traffic',
    attemptsFinishedMsg: 'Your 3 attempts are finished.If you still do not receive your OTP after 60 seconds, ',
    registerAgainMsg: 'go back and please register again.',
    tryAgainMsg: 'go back and please try again'
  };

  currency = 'RM';
  STRING_YES_NO = {
    YES: 'Yes',
    NO: 'No'
  };

  STRING_OWNER_TYPE = {
    guarantor: 'Guarantor',
    customer: 'Customer'
  };

  searchCategory = 'spname';
  otpTimer = 60;

  makeOfVehicleList = ['audi', 'bmw', 'chevrolet', 'ford', 'honda',
    'hyundai', 'infiniti', 'jaguar', 'kia', 'land rover', 'lexus', 'mazda',
    'mercedes benz', 'mini', 'mitsubishi', 'nissan', 'perodua', 'peugeot',
    'porsche', 'proton', 'subaru', 'suzuki', 'toyota', 'volkswagen', 'volvo'];

  SESSIONIDLETIME = 300;

  EMPLOYMENTCODE = {
    CODEU001: 'U001',
    CODEU002: 'U002',
    CODEU003: 'U003',
    CODEU00X: 'U00X',
    CODE88888: '88888',
    CODE01: '01',
    CODE112: '112',
    CODE114: '114',
    CODE03: '03',
    CODE120: '120',
    CODE200: '200'
  };

  SOURCEOFINCOME = {
    CODEOTHER: '099'
  };

  PREPENDZERO = '0';

  ENCRYPTKEY = '123456$#@$^@1ERF';

  ngOnInit() { }
}
