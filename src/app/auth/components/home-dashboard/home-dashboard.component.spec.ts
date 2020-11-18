import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDashboardComponent } from './home-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { HttpResponseHandlerService } from 'src/shared/services/http-response-handler.service';

import { ConfigService } from 'src/app/app-config.service';
import { Router } from '@angular/router';
import { MFPServiceProvider } from 'src/shared/services/mfpServiceProvider';


describe('HomeDashboardsComponent', () => {
  let component: HomeDashboardComponent;
  let fixture: ComponentFixture<HomeDashboardComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HomeDashboardComponent, CommonDataComponent ],
      providers: [ CommonDataComponent, ToastrService, HttpClient, HttpHandler, MFPServiceProvider,
        HttpResponseHandlerService,  ConfigService,
        { provide: ToastrService, useValue: TOAST_CONFIG },
        { provide: Router, useValue: router } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should track finance application', () => {
    // spy = spyOn(sharedService, 'startLoading').and.returnValue(true);
    expect(component.trackApplication()).toBeDefined();
  });

  it('should manage salesperson', () => {
    // spy = spyOn(sharedService, 'startLoading').and.returnValue(true);
    expect(component.manageSalesPerson()).toBeDefined();
  });

  it('should navigate to settings', async(() => {
    fixture.detectChanges();
    component.changeSettings();
    expect(router.navigate).toHaveBeenCalledWith(['settings']);
  }));

  it('should navigate to disbursment', async(() => {
    fixture.detectChanges();
    component.disbursment();
    expect(router.navigate).toHaveBeenCalledWith(['/disbursment']);
  }));

  it('should navigate to settlement', async(() => {
    fixture.detectChanges();
    component.settlement();
    expect(router.navigate).toHaveBeenCalledWith(['/settlement']);
  }));

  it('should navigate to finance', async(() => {
    fixture.detectChanges();
    component.applyFinance();
    expect(router.navigate).toHaveBeenCalledWith(['/finance']);
  }));

});
