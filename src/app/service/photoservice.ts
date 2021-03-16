import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from '../beans/image';

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    getImages(choix : string) {
      let photo = 'assets/image/'+choix+'.json';
    return this.http.get<any>(photo)
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }
}