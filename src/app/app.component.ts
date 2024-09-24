import { ViewportScroller } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmailService } from './service/emailService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {

  //afficher / non afficher menu horizontal
  displayMenuHorizontal: number = 0;

  fondtransparent: boolean;
  //langues disponnibles
  supportLanguages = ['en', 'fr', 'mg']
  //par defaut c'est fr
  langueUtuliser: string = 'fr';
  //afficher meteo
  displaymeteo: boolean =true;
  

  constructor(private emailService: EmailService, private router: Router, private translateService: TranslateService, private vps: ViewportScroller) { }

  ngOnInit(): void {

    /* ******************LANGUES PAR DEFAUT*****************************************/
    //on ajoutes les langues dans translate
    this.translateService.addLangs(this.supportLanguages);
    //langue par defaut utulisé
    this.translateService.setDefaultLang(this.langueUtuliser);
    //on recupere la langue utuliser
    const browserlang = this.translateService.getBrowserLang();
    //et dire a translate service de l'utiliser
    this.translateService.use(this.translateService.getDefaultLang());
    /* *******************************************************************/
  }

  // methode qui s'execute automatique
  //je dois conaitre le valeur de scroll y
  ngDoCheck() {
    var y = window.scrollY;
    this.fondtransparent = y === 0 ? true : false;
  }

  langueSelectionner ( langue : string) {
    this.translateService.use(this.langueUtuliser);
  }

  //methode qui permet de scroller sur un div precis (ici quand on clique sur contact, on se met directement sur l'ecran contact en appellant l'id du div)
  scroll(id) {
    this.vps.scrollToAnchor(id);
  }

  menuVerticalEventRecuperer(event: any) {
    //pour la langue
    this.langueUtuliser = event['langue'];
    this.translateService.use(this.langueUtuliser);
    if (event['contact']) {
      this.scroll('divcontact');
    }
  }

  display() {
    let i = 1;
    this.displayMenuHorizontal = 1 + this.displayMenuHorizontal;
  }
  displayMeteo() {
    if (this.displaymeteo) {
      this.displaymeteo = false;
    } else {
      this.displaymeteo = true;
    }
  }
}