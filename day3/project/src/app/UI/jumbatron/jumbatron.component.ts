import { Component, Input } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jumbatron',
  imports: [],
  templateUrl: './jumbatron.component.html',
  styleUrl: './jumbatron.component.scss'
})
export class JumbatronComponent {
@Input() data:any;
selectedState:any;
mapUrl!: SafeResourceUrl;
states=[
  {
    "id":1,
    "name":"KERALA",
    "desc":"Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers",
    "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4017027.9371875343!2d71.1210530135845!3d10.510207724867138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1734462717132!5m2!1sen!2sin"

  },
  {
    "id":2,
    "name":"LAKSHWADEEP",
    "desc":"Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India. Not all of the islands are inhabited, and only a few are open to visitors (permits required). Kavaratti, one of the more developed islands, is home to dozens of mosques, including the ornately decorated Ujra Mosque, as well as Kavaratti Aquarium, showcasing regional fish, shark and coral species.",
    "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011860.7418310577!2d71.61287477576515!3d9.982494331333823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b9fcd65cae4973d%3A0x17bd7416842ce9aa!2sLakshadweep!5e0!3m2!1sen!2sin!4v1734632401841!5m2!1sen!2sin"

  },
  {
    "id":3,
    "name":"TELENGANA",
    "desc":"Telangana is a state in southern India. In the capital of Hyderabad, the Charminar is a 16th-century mosque with 4 arches supporting 4 towering minarets. The monument overlooks the city's long-running Laad Bazaar. Once the seat of the Qutb Shahi dynasty, the sprawling Golconda Fort is a former diamond-trading center. In the city of Warangal, the centuries-old Warangal Fort features carved stone towers and gateways",
    "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888715.3444606243!2d76.63742289664948!3d17.858613921680227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3350db9429ed43%3A0x63ef7ba741594059!2sTelangana!5e0!3m2!1sen!2sin!4v1734632941172!5m2!1sen!2sin"

  }
]
constructor(private activated:ActivatedRoute,private sanitizer: DomSanitizer){}

ngOnInit(){
  this.selectedState = this.states.find(state => state.id == Number(this.data.id))
  if (this.selectedState) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedState.map);
  }
}
}
