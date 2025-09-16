import { Component } from '@angular/core';
import { PagesRoutingModule } from "../../pages/pages-routing-module";

@Component({
  selector: 'app-header',
  imports: [PagesRoutingModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
