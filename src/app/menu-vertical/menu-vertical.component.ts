import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent implements OnInit, OnChanges {

  constructor() { }
  
  items: MenuItem[];

  @Output() menuVerticalEvent = new EventEmitter();
  @Input() langueUtuliser;
  play: boolean = false;
  pause: boolean = true;
  contact: boolean = false; 

  

  ngOnInit(): void { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.langueUtuliser === 'fr')  {
      this.items = [
        {
          label: 'LANGUE',
          icon: '',
          items: [
            { label: 'Malgache', icon: "",  command: ()=> this.methodeLangue('mg') },
            { label: 'Francais', icon: "", command: ()=> this.methodeLangue('fr') },
            { label: 'Anglais', icon: "", command: ()=> this.methodeLangue('en') }
          ]
        },
        {
          label: 'RESERVATION',
          icon: '',
          command: () => this.methdodeReservation()
  
        },
        {
          label: 'CONTACT',
          icon: '',
          command: () => this.methodeContact()
        }
      ];
    } else if (this.langueUtuliser === 'mg') {
      this.items = [
        {
          label: 'FITENY',
          icon: '',
          items: [
            { label: 'Malagasy', icon: "",  command: ()=> this.methodeLangue('mg') },
            { label: 'Frantsay', icon: "", command: ()=> this.methodeLangue('fr') },
            { label: 'Angilisy', icon: "", command: ()=> this.methodeLangue('en') }
          ]
        },
        {
          label: 'FAMANDRIANA',
          icon: '',
          command: () => this.methdodeReservation()
  
        },
        {
          label: 'HETSIKA',
          icon: '',
          command: () => this.methdodeNosActivite()
        },
        {
          label: 'FIANTSOANA',
          icon: '',
          command: () => this.methodeContact()
        }
      ];
    } else if ((this.langueUtuliser === 'en')) {
      this.items = [
        {
          label: 'LANGUE',
          icon: '',
          items: [
            { label: 'Malgache', icon: "",  command: ()=> this.methodeLangue('mg') },
            { label: 'French', icon: "", command: ()=> this.methodeLangue('fr') },
            { label: 'Inglish', icon: "", command: ()=> this.methodeLangue('en') }
          ]
        },
        {
          label: 'BOOKING',
          icon: '',
          command: () => this.methdodeReservation()
  
        },
        {
          label: 'YOUR ACIVITIES',
          icon: '',
          command: () => this.methdodeNosActivite()
        },
        {
          label: 'CONTACT',
          icon: '',
          command: () => this.methodeContact()
        }
      ];
    }
  }

  methodeContact() {
   this.contact = true;
   this.menuVerticalEvent.emit({'contact' : this.contact, 'langue': this.langueUtuliser});
  
  }
  

  methodeLangue(langue: string) {
      this.langueUtuliser = langue;
      this.menuVerticalEvent.emit({'contact' : false, 'langue': this.langueUtuliser});
  }

  methdodeReservation() {
    console.log('fjfjfjf'); //execute action
    console.log('fjfjfjf'); //execute action

  }

  methdodeNosActivite() {
    console.log('fjfjfjf'); //execute action
    console.log('fjfjfjf'); //execute action

  }

}
