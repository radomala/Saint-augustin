import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 //{ path: 'Acceuil', component: AcceuilComponent }
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
