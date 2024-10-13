import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Image } from '../beans/image';
import { Product } from '../beans/products';

@Injectable()
export class PhotoService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  constructor(private http: HttpClient) { }

  getImages(choix: string) {
    console.log("servi " , choix);
    let photo = 'assets/image/' + choix + '.json';
    return this.http.get<any>(photo)
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
  }

  getImages2(choix: string): Observable<Image[]>{
    let photo = 'assets/image/' + choix + '.json';
    return this.http.get<Image[]>(photo);
  }



  getProductsSmall() {
    return this.http.get<any>('assets/image/activites.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  getProducts() {
    return this.http.get<any>('assets/products.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

}