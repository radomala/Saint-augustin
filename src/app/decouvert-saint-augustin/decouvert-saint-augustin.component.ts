import { Component, OnInit } from '@angular/core';
import { ChoixDiapo } from '../beans/choixDiapo';
import { Image } from '../beans/image';
import { PhotoService } from '../service/photoservice';



@Component({
  selector: 'app-decouvert-saint-augustin',
  templateUrl: './decouvert-saint-augustin.component.html',
  styleUrls: ['./decouvert-saint-augustin.component.css']
})
export class DecouvertSaintAugustinComponent implements OnInit {

  image_baleine: Image[] = [];
  image_flamment_rose: Image[] =[];
  image_pecheur:Image[] = [];
  image_plage: Image[] = [];
  

  //on s'adapte avec la taille de l'ecran
  responsiveOptions: any[] = [{ breakpoint: '1024px', numVisible: 5 }, { breakpoint: '768px', numVisible: 3 }, { breakpoint: '560px', numVisible: 1 }];

  constructor(private photoService: PhotoService) {

  }

  ngOnInit(): void {
    //par defaut, scroll debut de la page
    window.scroll(0, 0);
    this.getimage();
  }

  getimage() {
    this.photoService.getImages(ChoixDiapo.Decouvrir_saint_augustin)
      .then(images => {
        let tmpflament = [];
        let tmpBaleine = [];
        let tmpPlage = [];
        let tmpPecheur = [];
            for (let i =0 ; i < images.length; i++) {
               if (images[i]['previewImageSrc'].includes('flamment')) {
                tmpflament.push(images[i]);
               } 
               if (images[i]['previewImageSrc'].includes('baleine')) {
                 tmpBaleine.push(images[i]);
               } 
               if (images[i]['previewImageSrc'].includes('plage')) {
                  tmpPlage.push(images[i]);
               }
               if (images[i]['previewImageSrc'].includes('pecheur')) {
                   tmpPecheur.push(images[i]);
               }
            }
            this.image_flamment_rose = tmpflament;
            this.image_baleine = tmpBaleine;
            this.image_plage = tmpPlage;
            this.image_pecheur = tmpPecheur;  
      }
      )
  }

  //executer une methode lors d'un survol
  displayTagInfo(event){
    console.log(event);
  }
  
}
