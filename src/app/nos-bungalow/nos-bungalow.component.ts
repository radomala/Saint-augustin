import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChoixDiapo } from '../beans/choixDiapo';
import { PhotoService } from '../service/photoservice';


@Component({
  selector: 'app-nos-bungalow',
  templateUrl: './nos-bungalow.component.html',
  styleUrls: ['./nos-bungalow.component.css']
})
export class NosBungalowComponent implements OnInit {

  constructor(private  vps :  ViewportScroller, private photoService: PhotoService) { }

  images: any[];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  ngOnInit(): void {
    window.scroll(0, 0);
    this.photoService.getImages(ChoixDiapo.Nos_bungalow_simple_interne).then(images => this.images = images)
  }

  decouvrir() {
    this.scroll('commentaire1');
 }

 scroll(id) {
  this.vps.scrollToAnchor(id);
}


}
