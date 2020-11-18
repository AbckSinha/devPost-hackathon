import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DateformatPipe } from './utility/dateformat';
import { DobformatPipe } from './utility/dobFormat';
import { BrokenPageComponent } from './components/broken-page/broken-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    ConfirmationDialogComponent,
    DateformatPipe,
    DobformatPipe,
    BrokenPageComponent
  ],
  exports: [DateformatPipe, DobformatPipe]
})
export class SharedModule { }
