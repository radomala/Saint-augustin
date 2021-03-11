import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];
    display: boolean;
    visibleSidebar1: boolean;

    constructor() { }

    ngOnInit() {

        this.items = [
            {
                label: 'RESERVATION',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'NOS ACIVITES',
                icon: 'pi pi-fw pi-file',
            },
            {
                label: 'NOTRE SPA',
                icon: 'pi pi-fw pi-file',
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

}
