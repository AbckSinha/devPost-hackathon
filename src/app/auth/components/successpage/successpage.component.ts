import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/shared/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.scss']
})
export class SuccessPageComponent implements OnInit {
  imgBasePath = environment.images;
  message: string;
  subMessage: string;
  appHeight: number;

  constructor(
    private router: Router,
    public sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.setTitle('Success');
    this.sharedService.currentMessage.subscribe(message => this.message = message);
    this.sharedService.currentSubMessage.subscribe(subMessage => this.subMessage = subMessage);
    this.sharedService.setHeaderOption('Header_No_Option');
    this.appHeight = window.innerHeight - 80;
  }


  /**
   * Navigates to login page after changed password
   */
  goToLogin() {
    this.router.navigate(['login']);
  }
}
