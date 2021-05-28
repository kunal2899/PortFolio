import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  constructor(public fireServices:AngularFirestore) { }

  sendMessage(c){
    return this.fireServices.collection('response').add(c);
  }
}
