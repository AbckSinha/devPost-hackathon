import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/shared/shared.service';
import { environment } from 'src/environments/environment';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';

@Component({
  selector: 'app-header-options',
  templateUrl: './header-options.component.html',
  styleUrls: ['./header-options.component.scss']
})
export class HeaderOptionsComponent implements OnInit {
  title;
  previousUrl;
  imgBasePath = environment.images;
  userID: any;
  opened = false;

  constructor(
    public router: Router,
    private sharedService: SharedService,
    private idle: Idle
  ) {
  }

  ngOnInit() {
    this.sharedService.title.subscribe(title => {
      this.title = title;
    });
  }
  /*
    Logout functionality
  */
  logout() {
    this.router.navigate(['login']);
  }

  toggleSidebar() {
    this.opened = !this.opened; 
  }


}
