import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  @Output() methodeContactEvent = new EventEmitter();

  ngOnInit(): void {
    this.items = [
      {
        label: 'RESERVATION',
        icon: 'pi pi-fw pi-file',
        command: () => this.methdodeReservation()

      },
      {
        label: 'NOS ACIVITES',
        icon: 'pi pi-fw pi-file',
        command: () => this.methdodeNosActivite()
      },
      {
        label: 'CONTACT',
        icon: 'pi pi-envelope',
        command: () => this.methodeContact()
      },
      {
        label: 'LANGUE',
        icon: 'pi pi-flag',
        items: [
          { label: 'Malgache', icon: "" },
          { label: 'Francais', icon: "" }
        ]
      }
    ];
  }

  methodeContact() {
    this.methodeContactEvent.emit(true);
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
