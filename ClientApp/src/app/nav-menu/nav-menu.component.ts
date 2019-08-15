import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor() {
    document.addEventListener('DOMContentLoaded', function () {
      if (window.innerWidth < 767) {
        (document.getElementById('navbarTitle')).innerHTML = "OPG Almaši";
      }
      else {
        (document.getElementById('navbarTitle')).innerHTML = "OPG Almaši";
      }
      this.onResize;
    }, false);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    var width = window.innerWidth;
    if (width < 768) {
      (document.getElementById('navbarTitle')).innerHTML = "OPG Dario Almaši";
    }
    else {
      (document.getElementById('navbarTitle')).innerHTML = "OPG<br/>Dario Almaši";
    }
  }
}
