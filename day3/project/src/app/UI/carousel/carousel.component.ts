import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  imports: [CarouselModule,NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() data : any;
  carouselHome = [
    {
      "id":1,
      "title":"INDIA",
      "alt":"INDIA",
      "img":"https://www.andbeyond.com/wp-content/uploads/sites/5/khajuraho-india-temple-complex.jpg"
    },
    {
      "id":2,
      "title":"INDIA",
      "alt":"INDIA",
      "img":"https://wetu.com/imageHandler/c1920x1080/43334/agra-istock-866758116.jpg?fmt=jpg"
    },
    {
      "id":3,
      "title":"INDIA",
      "alt":"INDIA",
      "img":"https://nuba.com/wp-content/uploads/2023/06/Backwater-Kerala-India-scaled.jpeg"
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 2000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}

