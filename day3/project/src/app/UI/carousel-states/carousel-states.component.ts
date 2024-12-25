import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel-states',
  imports: [CarouselModule,NgFor],
  templateUrl: './carousel-states.component.html',
  styleUrl: './carousel-states.component.scss'
})
export class CarouselStatesComponent {
  @Input() data : any;

  selectedCarousel:any;
  carousel = [
    {
      "id": 1,
      "title": "KERALA",
      "alt": "KERALA",
      "img": [{
        "id":1,
        "src":"https://www.peakadventuretour.com/socialimg/kerala-tourism-guide.jpg",
      },
      {
        "id":2,
        "src":"https://www.peakadventuretour.com/assets/imgs/kerala-tourism-09.webp",
      },
      {
        "id":3,
        "src":"https://www.peakadventuretour.com/assets/imgs/kerala-tourism-11.webp"
      }
      ]
    },
    {
      "id": 2,
      "title": "LAKSHWADEEP",
      "alt": "LAKSHWADEEP",
      "img": [{
        "id":1,
        "src":"https://media.cntraveller.in/wp-content/uploads/2016/11/lakshadweeplead.jpg",
      },
      {
        "id":2,
        "src":"https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/01/09174004/minicoy.jpeg",
      },
      {
        "id":3,
        "src":"https://herexpeditions.com/wp-content/uploads/2023/11/Untitled-design-4.jpg"
      }
      ]
    },
    {
      "id": 3,
      "title": "TELEGANA",
      "alt": "TELEGANA",
      "img": [{
        "id":1,
        "src":"https://www.adotrip.com/public/images/areas/master_images/5c4edc96a044b-Charminar_Places_to_See.jpg",
      },
      {
       
        "id":2,
        "src":"https://lifesciences.telangana.gov.in/wp-content/uploads/2020/11/5-1.png",
      },
      {
        "id":3,
        "src":"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/02/22015432/golconda-fort-1.jpg"
      }
      ]
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

  constructor(private activated:ActivatedRoute){}

  ngOnInit() {
    this.selectedCarousel = this.carousel.find(state => state.id == Number(this.data.id))
    console.log(this.selectedCarousel.title)
    console.log(this.selectedCarousel.img.id)
  }
}

