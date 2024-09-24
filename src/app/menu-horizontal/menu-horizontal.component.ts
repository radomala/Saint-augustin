import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.css']
})
export class MenuHorizontalComponent implements OnInit , OnChanges {

  @Input() displayMenuHorizontal: number;
  activer_menuHorizontal: boolean;

  @Output() menuHorizontaEvent = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.displayMenuHorizontal !== 0)  {
      this.activer_menuHorizontal = true;
    } else {
      this.activer_menuHorizontal = false;
    }
  }

  menuHorizontalMap() {
    //on monte vers la haut de page
     window.scroll(0, 0);
    //cacher sidebar, on ferme le sidebar a la fin
    this.activer_menuHorizontal = false;

    //this.menuHorizontaEvent.emit ({'diaporama' : false, 'map': true, 'choix_diaporama': "", });

    this.route.navigate(['/', 'position']);
    
  }

  navigateToDecouvrirSaintAugustin() {
    //cacher sidebar
    //on monte vers la haut de page
     window.scroll(0, 0);
    this.activer_menuHorizontal = false;
    this.route.navigate(['/', 'decouvrir_saint_augustin']);
  };

  navigateToNosRestaurant() {
    //cacher sidebar
    //on monte vers la haut de page
    window.scroll(0, 0);
    this.activer_menuHorizontal = false;
    this.route.navigate(['/', 'nosrestaurants']);
  };

  navigateToNosActivites() {
    //cacher sidebar
    //on monte vers la haut de page
    window.scroll(0, 0);
    this.activer_menuHorizontal = false;
    this.route.navigate(['/', 'nosactivites']);
  };

  navigateToNosBengalow() {
    //on monte vers la haut de page
    window.scroll(0, 0);
    //cacher sidebar
    this.activer_menuHorizontal = false;
    this.route.navigate(['/', 'nosbungalow']);
  };

}
