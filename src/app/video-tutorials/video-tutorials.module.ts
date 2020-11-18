import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { VideoTutorialsRoutingModule } from './video-tutorials-routing.module';


export const COMPONENTS = [
    TutorialsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    VideoTutorialsRoutingModule,
    SharedModule
  ],
  declarations: COMPONENTS,
  providers: [
  ],
  exports: COMPONENTS
})
export class VideoTutorialsModule { }
