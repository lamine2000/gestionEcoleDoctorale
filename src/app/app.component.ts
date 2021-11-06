import { Component } from '@angular/core';
import firebase from "firebase/compat/app";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionEcoleDoctorale';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBCiCVRI0xFJfpkhXT2U2gxYX92Lyn7-5o",
      authDomain: "projet-edmi.firebaseapp.com",
      projectId: "projet-edmi",
      storageBucket: "projet-edmi.appspot.com",
      messagingSenderId: "458561124384",
      appId: "1:458561124384:web:30d30650de3591e091e445",
      measurementId: "G-D7WDBTV219"

    };

    const app = firebase.initializeApp(firebaseConfig);
  }


}
