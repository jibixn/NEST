import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { CardComponent } from "../../UI/card/card.component";
import { VideoComponent } from "../../UI/video/video.component";
import { LogoGreetComponent } from "../../UI/logo-greet/logo-greet.component";
import { CarouselComponent } from "../../UI/carousel/carousel.component";
import { HeadingComponent } from "../../UI/heading/heading.component";
import { ButtonComponent } from "../../UI/button/button.component";

@Component({
  selector: 'app-home',
  imports: [VideoComponent, LogoGreetComponent, CarouselComponent, HeadingComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  headingTags = ["VISIT STATES"]
  buttonTags = ["States->"]
  carouselHome = [
    {
      "id":1,
      "img":"https://www.andbeyond.com/wp-content/uploads/sites/5/khajuraho-india-temple-complex.jpg"
    },
    {
      "id":2,
      "img":"https://wetu.com/imageHandler/c1920x1080/43334/agra-istock-866758116.jpg?fmt=jpg"
    },
    {
      "id":3,
      "img":"https://nuba.com/wp-content/uploads/2023/06/Backwater-Kerala-India-scaled.jpeg"
    }
  ]
  states =[
  {
    "name":"KERALA",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/cherai-beach-kochi-kerala-1-attr-nearby?qlt=82&ts=1727367738936"
  },
  {
    "name":"LAKSHWADEEP",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/bangaram-kavaratti-lakshwadeep-1-attr-nearby?qlt=82&ts=1727011535552"
  },
  {
    "name":"TELENGANA",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-1-attr-nearby?qlt=82&ts=1726653048468"
  },
  {
    "name":"TAMIL NADU",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/1-shore-temple-mamallapuram-2-attr-nearby?qlt=82&ts=1726654619613"
  },
  {
    "name":"PUNJAB",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-nearby?qlt=82&ts=1726662259743"
  },
  {
    "name":"KASHMIR",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/tulip-garden-patnitop-attr-nearby?qlt=82&ts=1727353616756"
  },
  {
    "name":"RAJASTHAN",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660181235"
  },
  {
    "name":"CHANDIGARH",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313"
  },
  {
    "name":"UP",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650395114"
  },
  {
    "name":"ANDAMAN",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743"
  },
  {
    "name":"MAHARASHTRA",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-1-attr-nearby?qlt=82&ts=1727355349679"
  },
  {
    "name":"MEGHALAYA",
    "img":"https://s7ap1.scene7.com/is/image/incredibleindia/noh-sngithiang-falls-cherrapunjee-meghalaya-1-attr-nearby?qlt=82&ts=1727354888840"
  }
]

}
