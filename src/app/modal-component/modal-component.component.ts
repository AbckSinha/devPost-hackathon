import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  imgBasePath = environment.images;
  appPosition = 'fixed';
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  @Input() title = '';
  @Input() content = '';
  ngOnInit() {
  }
  goBack() {
    this.activeModal.close();
  }
}
