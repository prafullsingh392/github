import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {

  activeLink ='home';

  constructor(private router:Router){
    
  }

  navigate(type:string){
    this.activeLink = type;
    this.router.navigate([`/${type}`])
  }

  
}
