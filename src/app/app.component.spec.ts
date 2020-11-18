import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from 'src/shared/components/header/header.component';
import { ConfigService } from './app-config.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HeaderOptionsComponent } from 'src/shared/components/header-options/header-options.component';
import { LoadingComponent } from 'src/shared/components/loading/loading.component';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { Idle, IdleExpiry } from '@ng-idle/core';
import { NgIdleKeepaliveModule, Keepalive } from '@ng-idle/keepalive';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
        HeaderOptionsComponent,
        LoadingComponent
      ],
      providers: [ ConfigService, HttpClient, HttpHandler, ToastrService,
        CommonDataComponent, Idle,
        { provide: ToastrService, useValue: TOAST_CONFIG },
        { provide: Idle, useClass: Idle },
        { provide: IdleExpiry, useClass: IdleExpiry },
        { provide: Keepalive, useClass: Keepalive }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title CIMB HP`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CIMB HP');
  });

  // it('should call onDeviceReady function', () => {
  //   expect(component.onDeviceReady()).toBeDefined();
  // });

  // it('should call onPause function', () => {
  //   expect(component.onPause()).toBeDefined();
  // });

  // it('should call onResume function', () => {
  //   expect(component.onResume()).toBeUndefined();
  // });

  it('should call idleTimeOut function', () => {
    expect(component.idelTimeOut()).toBeDefined();
  });

  it('should call sessionLogout function', () => {
    expect(component.sessionLogout()).toBeDefined();
  });

  it('should stop idleTimer', () => {
    expect(component.stopIdleTimer()).toBeDefined();
  });

  it('should perform timeout', () => {
    expect(component.performTimeOut()).toBeDefined();
  });
});
