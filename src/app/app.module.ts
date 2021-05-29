import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SendService } from './send.service';

const firebaseConfig = {
  apiKey: "AIzaSyCbpQ8xg2k8ww16CqsMFg9KpyCPZYIsqmg",
  authDomain: "kunal-j.firebaseapp.com",
  databaseURL: "https://kunal-j-default-rtdb.firebaseio.com",
  projectId: "kunal-j",
  storageBucket: "kunal-j.appspot.com",
  messagingSenderId: "52335493042",
  appId: "1:52335493042:web:38e2f6842c0e34bfff2eab",
  measurementId: "G-JPECTGEZXT"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [SendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
