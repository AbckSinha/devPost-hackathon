import { TestBed, inject } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { ConfigService } from 'src/app/app-config.service';
import { HttpResponseHandlerService } from './services/http-response-handler.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';

describe('SharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  RouterTestingModule ],
      providers: [SharedService, FormBuilder,
        HttpResponseHandlerService,
        HttpClient, HttpHandler, ConfigService, ToastrService,
        { provide: ToastrService, useValue: TOAST_CONFIG}]
    });
  });

  it('should be created', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));
});
