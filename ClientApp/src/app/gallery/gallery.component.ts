import { Component, HostListener } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-home',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  img: number;
  constructor() {
    document.addEventListener('DOMContentLoaded', function () {
      if (window.innerWidth < 767) {
        document.getElementById('enlarged').setAttribute('src', '');
        document.getElementById('bigImag').setAttribute('style', 'display:none;');
        document.getElementById('arrows').setAttribute('style', 'display:none;');
      }
      this.onResize;
    }, false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    var width = window.innerWidth;
    if (width < 767) {
      document.getElementById('enlarged').setAttribute('src', '');
      document.getElementById('bigImag').setAttribute('style', 'display:none;');
      document.getElementById('arrows').setAttribute('style', 'display:none;');
    }
  }

  imgswap(image: number) {
    var ua = navigator.userAgent;
    document.getElementById('arrows').setAttribute('style', 'display:unset;');
    document.getElementById('bigImag').setAttribute('style', 'display:unset;');
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) && window.innerWidth > 767) {
      console.log(window.innerWidth);
      document.getElementById('enlarged').setAttribute('src', this.images[image]);
      this.img = image;
      this.scrollToTop();
    }
  }

  imgprev() {
    if (this.img == 0) {
      this.img = 11;
    }
    else {
      this.img -= 1;
    }
    document.getElementById('enlarged').setAttribute('src', this.images[this.img]);
  }

  imgnext() {
    if (this.img == 11) {
      this.img = 0;
    }
    else {
      this.img += 1;
    }
    document.getElementById('enlarged').setAttribute('src', this.images[this.img]);
  }
  scrollToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  public thumb1 = require('../../assets/gallery/thumb01.jpg');
  public thumb2 = require('../../assets/gallery/thumb02.jpg');
  public thumb3 = require('../../assets/gallery/thumb03.jpg');
  public thumb4 = require('../../assets/gallery/thumb04.jpg');
  public thumb5 = require('../../assets/gallery/thumb05.jpg');
  public thumb6 = require('../../assets/gallery/thumb06.jpg');
  public thumb7 = require('../../assets/gallery/thumb07.jpg');
  public thumb8 = require('../../assets/gallery/thumb08.jpg');
  public thumb9 = require('../../assets/gallery/thumb09.jpg');
  public thumb10 = require('../../assets/gallery/thumb10.jpg');
  public thumb11 = require('../../assets/gallery/thumb11.jpg');
  public thumb12 = require('../../assets/gallery/thumb12.jpg');

  images = ['../../assets/gallery/img1.jpg',
    '../../assets/gallery/img2.jpg',
    '../../assets/gallery/img3.jpg',
    '../../assets/gallery/img4.jpg',
    '../../assets/gallery/img5.jpg',
    '../../assets/gallery/img6.jpg',
    '../../assets/gallery/img7.jpg',
    '../../assets/gallery/img8.jpg',
    '../../assets/gallery/img9.jpg',
    '../../assets/gallery/img10.jpg',
    '../../assets/gallery/img11.jpg',
    '../../assets/gallery/img12.jpg'
]
}
