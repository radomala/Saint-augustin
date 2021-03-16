import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PhotoService } from '../service/photoService';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.css']
})
export class MenuHorizontalComponent implements OnInit, OnChanges {

  constructor(private photoService: PhotoService, private primengConfig: PrimeNGConfig) { }

  @Input() afficher: any;
  display: boolean;
  images: any[];

  ngOnInit(): void {

    //au premier chargement
    this.display = false;
    this.primengConfig.ripple = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['afficher']) {
      this.display = true;
    } else {
      this.display = false;
    }
  }
  test() : void {
    console.log('jdjdjdjdhhdddjdjdj');
    // this.photoService.getImages().then(images => this.images = images)
    // console.log(this.images);
  }

}
