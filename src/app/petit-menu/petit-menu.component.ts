import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petit-menu',
  templateUrl: './petit-menu.component.html',
  styleUrls: ['./petit-menu.component.css']
})
export class PetitMenuComponent implements OnInit {

  displaymeteo: boolean =true;
  messageMeteo: string = 'Cacher météo'

  constructor( private vps: ViewportScroller) { }

  ngOnInit(): void {
  }

  displayMeteo() {
    if (this.displaymeteo) {
      this.displaymeteo = false;
      this.messageMeteo = 'Afficher méteo'; 
    } else {
      this.displaymeteo = true;
      this.messageMeteo = 'Cacher méteo';
    }
  }

  goFacebook () {
    window.open('http://www.facebook.fr/');
  }

  //methode qui permet de scroller sur un div precis (ici quand on clique sur contact, on se met directement sur l'ecran contact en appellant l'id du div)
  scroll() {
    this.vps.scrollToAnchor('divcontact');
  }

}
