import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../beans/result';
import { Contenumail } from '../beans/contenumail';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpreq: HttpClient) { }

  envoyerMail(contenu: any): Observable<any> {
    
    console.log('contenu mail : ' ,contenu);
    let params = new HttpParams();
    params = params.append("contenu",  contenu);

    return this.httpreq.post<any>('http://localhost:8080/sendAttachmentEmail', contenu);
  }

  envoyerMailBis(contenu: Contenumail): Observable<Result> {
    let params = new HttpParams();
    params = params.append("name",  ''+contenu.name);
    params = params.append("tel",  ''+contenu.tel);
    params = params.append("mail",  ''+contenu.mail);
    params = params.append("objectmail",  ''+contenu.message);
    return this.httpreq.get<Result>('http://localhost:8080/sendSimpleEmail', {params});
  }

}