import { Component } from '@angular/core';
import { PlaceholderBoxComponent } from "../../UI/placeholder-box/placeholder-box.component";
import { PlaceholderBox2Component } from "../../UI/placeholder-box2/placeholder-box2.component";
import { HeadingComponent } from "../../UI/heading/heading.component";
// import { VideoComponent } from "../../UI/video/curren.component";
import { ActivatedRoute } from '@angular/router';
import { CurrentStateHeadingComponent } from '../../UI/current-state-heading/current-state-heading.component';
import { CarouselStatesComponent } from '../../UI/carousel-states/carousel-states.component';
import { JumbatronComponent } from '../../UI/jumbatron/jumbatron.component';
import { ApiService } from '../../UI/api.service';
import {Title} from "@angular/platform-browser";
import { StateCardsComponent } from "../../UI/state-cards/state-cards.component";

@Component({
  selector: 'app-current-state',
  imports: [PlaceholderBox2Component, CarouselStatesComponent, JumbatronComponent],
  templateUrl: './current-state.component.html',
  styleUrl: './current-state.component.scss'
})
export class CurrentStateComponent {

  constructor(private activated:ActivatedRoute, public api:ApiService,private titleService:Title){
    
  }
   

  data :any;
  selected_images:any;
  images = [
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
  
  ngOnInit() {
    
    let id = this.activated.snapshot.paramMap.get("id")    
    this.data = this.api.getStatesById(id)
    this.titleService.setTitle(this.data.name);
    this.selected_images = this.images.find(state => state.id == Number(id));
    // console.log(this.data.name)
  }
}
