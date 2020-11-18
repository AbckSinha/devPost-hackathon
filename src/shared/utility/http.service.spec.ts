import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigService } from '../../app/app-config.service';
import { HttpResponseHandlerService } from '../services/http-response-handler.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpService, HttpClient, HttpHandler, ConfigService, HttpResponseHandlerService]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
