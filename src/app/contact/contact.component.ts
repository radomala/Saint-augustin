import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Contenumail } from '../beans/contenumail';
import { Result } from '../beans/result';
import { EmailService } from '../service/emailService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contenumail : Contenumail;
  confidentialite: boolean = false;
  name : String;
  tel : String;
  mail : String;
  objectmail : String;
  result: Result;
  capchat:boolean=false;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  

  constructor(private messageService: MessageService, private email : EmailService) {}

  ngOnInit(): void {
    
  }

  handleSuccess(event) {
       this.capchat = true;
       // this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
  }

  sendMessage () {
    let contenumail = new  Contenumail;
    contenumail.name = this.name;
    contenumail.tel = this.tel;
    contenumail.mail = this.mail;
    contenumail.message = this.objectmail;


  
    this.email.envoyerMail(contenumail).subscribe(res => {
       console.log('result envoie mail ', res);
     
       if (res['success']) {
        this.name = "";
        this.tel = "";
        this.mail = "";
        this.objectmail = ""; 

        this.messageService.add({severity:'info', summary:'Succees', detail: res['message']});
      
       } else {
        let message = res['message'][0]['field'] +' : ' + res['message'][0]['defaultMessage']
        this.messageService.add({severity:'error', summary:'Error', detail: message});
       
       }

    }); 
  }

  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
    this.capchat = false;
  }

}
