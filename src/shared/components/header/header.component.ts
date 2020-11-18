import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from 'src/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title;
  previousUrl;
  constructor(
    public router: Router,
    private sharedService: SharedService,
    private location: Location) {
  }

  ngOnInit() {
    this.sharedService.title.subscribe(title => {
      this.title = title;
    });
  }
}
