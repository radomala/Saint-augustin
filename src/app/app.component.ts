import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from './service/photoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private router: Router, private photoService: PhotoService) { }

  images: any[];
  responsiveOptions:any[] = [
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
    // this.images = [];
    // this.images.push({source:'assets/image/image1.jpg', alt:'Description for Image 1', title:'Title 1'});
    // this.images.push({source:'assets/image/image2.jpg', alt:'Description for Image 2', title:'Title 2'});
    // this.images.push({source:'assets/image/image3.jpg', alt:'Description for Image 3', title:'Title 3'});
    // this.images.push({source:'assets/image/image4.jpg', alt:'Description for Image 4', title:'Title 4'});
    // this.images.push({source:'assets/image/image5.jpg', alt:'Description for Image 5', title:'Title 5'});
    // this.images.push({source:'assets/image/image6.jpg', alt:'Description for Image 6', title:'Title 6'});
    // this.images.push({source:'assets/image/image7.jpg', alt:'Description for Image 7', title:'Title 7'});
    // this.images.push({source:'assets/image/image8.jpg', alt:'Description for Image 8', title:'Title 8'});
     this.photoService.getImages().then(images => this.images = images)
  }
  
}
