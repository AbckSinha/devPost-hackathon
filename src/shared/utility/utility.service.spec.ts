import { TestBed, inject } from '@angular/core/testing';
import { UtilityService } from './utility.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigService } from 'src/app/app-config.service';


describe('Testing UtilityService', () => {
  let utyservice: UtilityService;
  let cfgService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityService, HttpHandler, HttpClient, ConfigService]
    });
    cfgService = TestBed.get(ConfigService);
    utyservice = new UtilityService(cfgService);
  });

  it('should create an instance of Utility Service', () => {
    expect(utyservice).toBeDefined();
  });

});
