import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
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

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MembreService } from './service/membreService';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import {GMapModule} from 'primeng/gmap';
import { MapComponent } from './map/map.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ContactComponent } from './contact/contact.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import {InputSwitchModule} from 'primeng/inputswitch';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader  } from '@ngx-translate/http-loader';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { ActivitesComponent } from './activites/activites.component';
import {CarouselModule} from 'primeng/carousel';
import { DecouvertSaintAugustinComponent } from './decouvert-saint-augustin/decouvert-saint-augustin.component';
import { NosRestaurantComponent } from './nos-restaurant/nos-restaurant.component';
import {AccordionModule} from 'primeng/accordion';
import { NosBungalowComponent } from './nos-bungalow/nos-bungalow.component';
import { MeteoComponent } from './meteo/meteo.component';
import { FooterComponent } from './footer/footer.component';
import { PetitMenuComponent } from './petit-menu/petit-menu.component';
import { PhotoService } from './service/photoservice';



@NgModule({
  declarations: [
    AppComponent,
    MenuVerticalComponent,
    MapComponent,
    ContactComponent,
    MenuHorizontalComponent,
    ActivitesComponent,
    DecouvertSaintAugustinComponent,
    NosRestaurantComponent,
    NosBungalowComponent,
    MeteoComponent,
    FooterComponent,
    PetitMenuComponent
    
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    CommonModule,
    MessageModule,
    PanelModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
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
    GMapModule,
    ToastModule,
    NgxCaptchaModule,
    InputSwitchModule,
    CarouselModule,
    AccordionModule,
    

    // pour le dictionaire
    TranslateModule.forRoot(
      {
        loader: {
          provide : TranslateLoader,
          useFactory : (http : HttpClient) => {return new TranslateHttpLoader(http, './assets/i18n/', '.json' );},
          deps: [HttpClient] 
        }
      }
    ),
    

    //HTTP
    HttpClientModule
  ],
  providers: [MembreService, PhotoService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
