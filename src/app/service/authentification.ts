import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaketaMembre } from '../beans/membre';



@Injectable()
export class Authentification {

    constructor(private http: HttpClient) {}
    
/*
    authentification2(name: string, lastname: string): Promise<RaketaMembre> {

        let params = new HttpParams();
        params = params.append("name", name);
        params = params.append("firstname", lastname);
        return this.http.put<RaketaMembre>(this.apiURL + '/authentification', {params}).toPromise();
      }

   */
    authentification(name: string, pwd: string): Observable<RaketaMembre>{
        let params = new HttpParams();
        params = params.append("name", name);
        params = params.append("pwd", pwd);
        return this.http.get<RaketaMembre>('http://localhost:8080/raketa/authLdap', {params});
      }

      authaurization(header : any): Observable<string>{
        let params = new HttpParams();
        params = params.append("header", header);
        return this.http.get<string>('http://localhost:8080/raketa/user', {params});
      }
  
}