import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'app-broken-page',
  templateUrl: './broken-page.component.html',
  styleUrls: ['./broken-page.component.scss']
})
export class BrokenPageComponent implements OnInit {

  imgBasePath = environment.images;
  appHeight: number;

  constructor(
    public sharedService: SharedService) { }

  ngOnInit() {

    this.sharedService.setTitle('Broken');
    this.sharedService.setHeaderOption('Header_No_Option');
    this.appHeight = window.innerHeight - 80;
  }

}
