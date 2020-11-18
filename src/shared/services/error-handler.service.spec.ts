import { TestBed, inject } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { FormBuilder } from '@angular/forms';
import { TOAST_CONFIG, ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpHandler, HttpClient} from '@angular/common/http';
import { ConfigService } from 'src/app/app-config.service';
import { CommonDataComponent } from '../components/common-data/common-data.component';
import { HttpResponseHandlerService } from './http-response-handler.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  RouterTestingModule, ToastrModule ],
      providers: [ErrorHandlerService, FormBuilder,
        HttpResponseHandlerService,
        HttpClient, HttpHandler, ConfigService, CommonDataComponent, ToastrService,
        { provide: ToastrService, useValue: TOAST_CONFIG}]
    });
  });

  it('should be created', inject([ErrorHandlerService], (service: ErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
