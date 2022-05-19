import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent implements OnInit {
  showNavigationArrows = true;
  images = ['assets/principal.jpg','assets/img.jpg', 'assets/games2.jpg'];
   

  constructor(config: NgbCarouselConfig) {
    this.showNavigationArrows = false;
  }

  ngOnInit(): void {
  }

}

