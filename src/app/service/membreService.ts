import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaketaMembre } from '../beans/membre';
import { Result } from '../beans/result';


@Injectable()
export class MembreService {
  
    constructor(private http: HttpClient) {}

    listMembre(): Observable<RaketaMembre[]>{
        return this.http.get<RaketaMembre[]>('http://localhost:8080/raketa//membre/list');
      }

    addMembre(newMembre: RaketaMembre): Observable<Result>{
        return this.http.put<Result>('http://localhost:8080/raketa/addMembre', newMembre);
    }

}