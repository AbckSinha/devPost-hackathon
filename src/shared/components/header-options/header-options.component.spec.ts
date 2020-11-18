import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOptionsComponent } from './header-options.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TOAST_CONFIG, ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/app-config.service';
import { CommonDataComponent } from '../common-data/common-data.component';
import { FormBuilder } from '@angular/forms';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { HttpResponseHandlerService } from 'src/shared/services/http-response-handler.service';
import { Router } from '@angular/router';
describe('HeaderOptionsComponent', () => {
  let component: HeaderOptionsComponent;
  let fixture: ComponentFixture<HeaderOptionsComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderOptionsComponent],
      providers: [FormBuilder,
        HttpResponseHandlerService,
        HttpClient, HttpHandler, ConfigService, ToastrService, CommonDataComponent,
        { provide: ToastrService, useValue: TOAST_CONFIG },
        { provide: Router, useValue: router }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login', async(() => {
    fixture.detectChanges();
    component.logout();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));

});
