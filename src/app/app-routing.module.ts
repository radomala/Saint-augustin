import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitesComponent } from './activites/activites.component';
import { DecouvertSaintAugustinComponent } from './decouvert-saint-augustin/decouvert-saint-augustin.component';
import { MapComponent } from './map/map.component';
import { NosBungalowComponent } from './nos-bungalow/nos-bungalow.component';
import { NosRestaurantComponent } from './nos-restaurant/nos-restaurant.component';


const routes: Routes = [
 { path: '', component: DecouvertSaintAugustinComponent },
 { path: 'nosrestaurants', component: NosRestaurantComponent},
 { path: 'decouvrir_saint_augustin', component: DecouvertSaintAugustinComponent },
 { path: 'nosactivites', component: ActivitesComponent },
 { path: 'nosbungalow', component: NosBungalowComponent },
 { path: 'position', component: MapComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
