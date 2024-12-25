import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ButtonComponent } from "../../UI/button/button.component";
import { CardComponent } from '../../UI/card/card.component';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(public api: ApiService){}
  products:any;
  ngOnInit(): void {
    this.api.getProducts().subscribe((res:any)=>{
      this.products=res.products
    })
  }
}
