import { Component } from '@angular/core';
// import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { ApiService } from '../../api.service';
import { GreetComponent } from "../../UI/greet/greet.component";
import { AppComponent } from "../../app.component";
import { RowComponent } from '../../UI/row/row.component';
import { ButtonComponent } from "../../UI/button/button.component";

@Component({
  selector: 'app-home',
  imports: [GreetComponent, RowComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products:any;
  
  constructor(public api:ApiService){}
  ngOnInit(): void {
    this.api.getProducts().subscribe((res:any)=>{
      this.products=res.products
    })
  }
}
