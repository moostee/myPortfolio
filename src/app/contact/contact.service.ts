import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList  } from "angularfire2/database";
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  visitorList : AngularFireList<any>
  contactList : AngularFireList<any>
  constructor(private firestore: AngularFireDatabase) { }

  
  insertContact(contact){
    this.contactList = this.firestore.list('contact');
    this.contactList.push({
      name : contact.yourName,
      subject : contact.subject,
      email : contact.email,
      message : contact.comment
    });    
  }
}

