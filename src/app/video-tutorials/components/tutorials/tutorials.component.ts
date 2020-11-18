import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../../../shared/shared.service';

declare var cordova: any;
@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  imgBasePath = environment.images;
  appHeight: any;
  currentUser: any;
  dealerInfo: any;
  userRole: string;
  selectFlag: any;
  dealerVideoLists: any;
  salespersonVideoLists: any;


  @HostListener('window:scroll', [])
  scrollHandler(event): void {
    // TODO : handle scroll
  }

  constructor(
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.appHeight = window.innerHeight - 80;
    this.sharedService.setTitle('Tutorials');
    this.sharedService.setHeaderOption('Header_Option');
    this.userRole = "SALESPERSON";

    this.salespersonVideoLists = [
      {
        'label': 'Build better website',
        'link': 'https://www.youtube.com/watch?v=lODdNoLpBSg'
      },
      {
        'label': 'react for begginners',
        'link': 'https://www.youtube.com/watch?v=Ke90Tje7VS0'
      },
      {
        'label': 'React in 5 hours',
        'link': 'https://www.youtube.com/watch?v=DLX62G4lc44'
      },
      {
        'label': 'Build better website',
        'link': 'https://www.youtube.com/watch?v=lODdNoLpBSg'
      },
      {
        'label': 'react for begginners',
        'link': 'https://www.youtube.com/watch?v=Ke90Tje7VS0'
      },
      {
        'label': 'React in 5 hours',
        'link': 'https://www.youtube.com/watch?v=DLX62G4lc44'
      }
    ]
  }

  // Function for back navigation
  goBack() {
    this.router.navigate(['home']);
  }

  viewVideo(videoLink) {
    // this.selectFlag = index;
    let target = "_system";
    cordova.InAppBrowser.open(videoLink.link, target, 'location=yes');
  }

}
