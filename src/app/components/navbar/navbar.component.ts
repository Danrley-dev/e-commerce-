import { Component, OnInit } from '@angular/core';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css'],
  providers: [NgbOffcanvasConfig, NgbOffcanvas]
})

export class NavbarComponent implements OnInit{
  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
    config.position = 'end';
    config.backdropClass = 'bg-info';
    config.keyboard = false; 
  }
  
    open(content: any) {
     this.offcanvasService.open(content);
  }

    ngOnInit(): void {
  }
}