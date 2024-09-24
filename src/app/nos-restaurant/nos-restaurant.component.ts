import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoixDiapo } from '../beans/choixDiapo';
import { PhotoService } from '../service/photoservice';

@Component({
  selector: 'app-nos-restaurant',
  templateUrl: './nos-restaurant.component.html',
  styleUrls: ['./nos-restaurant.component.css']
})
export class NosRestaurantComponent implements OnInit {
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

  constructor(private router: Router,private photoService: PhotoService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.photoService.getImages(ChoixDiapo.Nos_restaurants).then(images => this.images = images)
  }
}
