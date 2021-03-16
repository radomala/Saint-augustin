import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { EmailService } from './service/emailService';
import { PhotoService } from './service/photoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,  DoCheck {

  constructor(private emailService: EmailService, private router: Router, private photoService: PhotoService, private fb: FormBuilder) { }

  userform: FormGroup;
  submitted: boolean;
  genders: SelectItem[];
  description: string;

  images: any[];
  visibleSidebar1;
  saint_augustin: boolean;
  nos_menu: boolean;
  nos_bengalow: boolean;
  fondtransparent:boolean;

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



  map: boolean;
  diaporama: boolean = true;

  ngOnInit(): void {
    //les photos afficher par defaut= saint_augustin.json
    this.saint_augustin = true;
    this.photoService.getImages('saint_augustin').then(images => this.images = images);
  }

  // methode qui s'execute automatique, c'est pour verifier le 
  //je dois conaitre le valeur de scroll y
  ngDoCheck() {
    var y = window.scrollY;
    if (y===0) {
       //le fond de header est tranparent
       this.fondtransparent = true
    } else {
      // le fond de header n'est pas transparent
      this.fondtransparent = false;
    }
  }

  menuHorizontalPhotos(choix: string) {
    //afficher diaporama (si on clique diaporama, on affiche le diaporama)
    this.diaporama = true;
    //cacher map (si on clique diaporama, on cache le map)
    this.map = false;
    //choix
    if (choix === 'saint_augustin') {
      this.saint_augustin = true;
      this.nos_menu = false;
      this.nos_bengalow = false;
      this.photoService.getImages(choix).then(images => this.images = images)
    } else if (choix === 'nos_menu') {
      this.saint_augustin = false;
      this.nos_menu = true;
      this.nos_bengalow = false;
      this.photoService.getImages(choix).then(images => this.images = images)
    } else if (choix === 'nos_bengalow') {
      this.saint_augustin = false;
      this.nos_menu = false;
      this.nos_bengalow = true;
      this.photoService.getImages(choix).then(images => this.images = images)
    }

    //cacher sidebar, on ferme le sidebar a la fin
    this.visibleSidebar1 = false;


  }

  menuHorizontalMap() {
    //afficher map (si on clique map, on affiche map)
    this.map = true;
    //cacher diaporama
    this.diaporama = false;
    //cacher sidebar, on ferme le sidebar a la fin
    this.visibleSidebar1 = false;
  }

  // methode qui permet de descendre en bas de la page
  afficherformuliareContact() {
    window.scroll(0, 10000);
  }

  test(): string {
    var y = window.scrollY;
    console.log('yyy :', y);
    return null;

  }


}
