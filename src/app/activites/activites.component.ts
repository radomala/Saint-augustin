import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photoservice';


@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

  products: any;

  responsiveOptions;

  constructor(private photoService: PhotoService, private vps: ViewportScroller) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.photoService.getProductsSmall().then(products => {
      this.products = products;
    });
  }

  decouvrir() {
    this.scroll('choix_activites');
  }

  scroll(id) {
    this.vps.scrollToAnchor(id);
  }

  decouvrirKayak(activites_choisit: string) {
    console.log(activites_choisit);
  }


}