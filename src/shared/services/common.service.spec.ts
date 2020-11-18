import { TestBed, inject } from '@angular/core/testing';

import { CommonService } from './common.service';
import { ConfigService } from 'src/app/app-config.service';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService, HttpClient, HttpHandler, ConfigService]
    });
  });

  it('should be created', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));
});
