import { Component } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public headingLarge = require('../../assets/images/heading_large.jpg');
  public headingMedium = require('../../assets/images/heading_medium.jpg');
  public headingSmall = require('../../assets/images/heading_small.jpg');
}
