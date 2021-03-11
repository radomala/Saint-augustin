import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {DialogModule} from 'primeng/dialog';
//import {DropdownModule} from 'primeng/dropdown';
import { NgxSpinnerModule } from "ngx-spinner";
import {TooltipModule} from 'primeng/tooltip';
import {FocusTrapModule} from 'primeng/focustrap';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataViewModule} from 'primeng/dataview';
import {MessagesModule} from 'primeng/messages';
import {MenuModule} from 'primeng/menu';
import {GalleriaModule} from 'primeng/galleria';
GalleriaModule

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

import { MembreService } from './service/membreService';
import { PhotoService } from './service/photoService';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
    
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    PanelModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    PanelModule,
    InputTextModule,
    RouterModule,
    MenubarModule, 
    SidebarModule,
    DialogModule,
    DataViewModule,
   // DropdownModule,
    NgxSpinnerModule,
    TooltipModule,
    FocusTrapModule,
    FileUploadModule,
    RadioButtonModule,
    MessagesModule,
    RadioButtonModule,
    TabMenuModule,
    MenuModule,
    GalleriaModule,



    //HTTP
    HttpClientModule
  ],
  providers: [MembreService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
