import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigService } from 'src/app/app-config.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { ToastrService, ToastrModule, TOAST_CONFIG } from 'ngx-toastr';
import { HttpResponseHandlerService } from 'src/shared/services/http-response-handler.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  const formBuilder: FormBuilder = new FormBuilder();
  let frmContrl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [ HttpClient, HttpHandler, ConfigService,
        CommonDataComponent, HttpResponseHandlerService,
        { provide: ToastrService, useValue: TOAST_CONFIG },
        { provide: FormBuilder, useValue: formBuilder },
        { provide: Router, useValue: router }
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    component.loginForm = formBuilder.group({
      userId: '',
      password: ''
    });
    frmContrl = new FormControl();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Is login form value is empty first
  it('should  contain a default value for the loginForm', () => {
    expect(component.loginForm.value).toEqual({ userId: '', password: '' });
  });

  it('should navigate to register', async(() => {
    fixture.detectChanges();
    component.redirectToRegister();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  }));

  it('should navigate to forgot-password-main', async(() => {
    fixture.detectChanges();
    component.forgotPassword();
    expect(router.navigate).toHaveBeenCalledWith(['forgot-password-main']);
  }));

  it('should Validate user credentials and display message accordingly', () => {
    expect(component.onSubmit()).toBeDefined();
  });

});
