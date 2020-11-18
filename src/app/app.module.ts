import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

import { HeaderComponent } from 'src/shared/components/header/header.component';
import { HeaderOptionsComponent } from 'src/shared/components/header-options/header-options.component';
import { LoadingComponent } from 'src/shared/components/loading/loading.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './app-config.service';
import { HttpResponseHandlerService } from '../shared/services/http-response-handler.service';
import { HttpService } from '../shared/utility/http.service';
import { AuthComponent } from './auth/auth.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal-component/modal-component.component';
import { CommonDataComponent } from 'src/shared/components/common-data/common-data.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { SharedModule } from 'src/shared/shared.module';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import { ConfirmationDialogComponent } from 'src/shared/components/confirmation-dialog/confirmation-dialog.component';
import { VideoTutorialsComponent } from './video-tutorials/video-tutorials.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderOptionsComponent,
    AppComponent,
    AuthComponent,
    ModalComponent,
    CommonDataComponent,
    LoadingComponent,
    VideoTutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    NgIdleKeepaliveModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgDatepickerModule,
    SharedModule, SidebarModule.forRoot()
  ],
  exports: [
    NgbModule
  ],
  providers: [
    ConfigService,
    HttpResponseHandlerService,
    HttpService,
    CommonDataComponent,
    ConfirmationDialogComponent,
    NgbActiveModal
  ],
  entryComponents: [
    ModalComponent,
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
