import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Contact } from '../beans/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  checked: boolean = false;

  constructor(private messageService: MessageService) {}


  ngOnInit(): void {
  }

  handleSuccess(event) {
        this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
  }
  

}
