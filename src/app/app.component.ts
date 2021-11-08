import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Gestion-EDMI";

  constructor(){
    const config = {
      apiKey: "AIzaSyBCiCVRI0xFJfpkhXT2U2gxYX92Lyn7-5o",
      authDomain: "projet-edmi.firebaseapp.com",
      projectId: "projet-edmi",
      storageBucket: "projet-edmi.appspot.com",
      messagingSenderId: "458561124384",
      appId: "1:458561124384:web:30d30650de3591e091e445",
      measurementId: "G-D7WDBTV219"
    };
    firebase.default.initializeApp(config);
  }
}
