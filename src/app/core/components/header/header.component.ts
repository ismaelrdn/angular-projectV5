import { Component } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import { headerLinks } from './config/header.config';
import { HeaderLink } from './config/model/header.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public currentUrl: string = '';
  public headerLinksElements : HeaderLink[] = headerLinks

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot);
    this.router.events.subscribe((event) => {
      if (event instanceof ChildActivationEnd && event.snapshot.url?.length > 0) {
           console.log(event.snapshot.url[0].path)
      }
    })
  }

}
