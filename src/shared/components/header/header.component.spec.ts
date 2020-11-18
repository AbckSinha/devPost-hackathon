import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedService } from 'src/shared/shared.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/app-config.service';
import { CommonDataComponent } from '../common-data/common-data.component';
import { HttpResponseHandlerService } from 'src/shared/services/http-response-handler.service';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ],
      providers: [SharedService,  HttpClient, HttpHandler, ConfigService,
        CommonDataComponent, HttpResponseHandlerService,
        { provide: ToastrService, useValue: TOAST_CONFIG }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
