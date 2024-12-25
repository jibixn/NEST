import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  states =[
    {
      "id":1,
      "name":"KERALA",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/cherai-beach-kochi-kerala-1-attr-nearby?qlt=82&ts=1727367738936"
    },
    {
      "id":2,
      "name":"LAKSHWADEEP",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/bangaram-kavaratti-lakshwadeep-1-attr-nearby?qlt=82&ts=1727011535552"
    },
    {
      "id":3,
      "name":"TELENGANA",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/charminar-hyderabad-1-attr-nearby?qlt=82&ts=1726653048468"
    },
    {
      "id":4,
      "name":"TAMIL NADU",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/1-shore-temple-mamallapuram-2-attr-nearby?qlt=82&ts=1726654619613"
    },
    {
      "id":5,
      "name":"PUNJAB",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-nearby?qlt=82&ts=1726662259743"
    },
    { "id":6,
      "name":"KASHMIR",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/tulip-garden-patnitop-attr-nearby?qlt=82&ts=1727353616756"
    },
    {
      "id":7,
      "name":"RAJASTHAN",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660181235"
    },
    {
      "id":8,
      "name":"CHANDIGARH",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313"
    },
    {
      "id":9,
      "name":"UP",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650395114"
    },
    {
      "id":10,
      "name":"ANDAMAN",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743"
    },
    {
      "id":11,
      "name":"MAHARASHTRA",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-1-attr-nearby?qlt=82&ts=1727355349679"
    },
    {
      "id":12,
      "name":"MEGHALAYA",
      "img":"https://s7ap1.scene7.com/is/image/incredibleindia/noh-sngithiang-falls-cherrapunjee-meghalaya-1-attr-nearby?qlt=82&ts=1727354888840"
    }
  ]

  getStatesById(id:any){
    return this.states.find(state => state.id == Number(id));
  }

  getStates(){
    return this.states;
  }
}
