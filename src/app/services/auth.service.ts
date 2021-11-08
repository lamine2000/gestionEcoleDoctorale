import {Injectable} from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  constructor() {
  }

  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {

        firebase.default.auth().createUserWithEmailAndPassword(email, password).then(
          (sucess) => {resolve(sucess);},
          (error) => {reject(error);}
        )
      }
    )
  }

  signInUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        firebase.default.auth().signInWithEmailAndPassword(email, password).then(
          (success) => {resolve(success);},
          (error) => {reject(error);}
        )
      }
    )
  }

  signOtUser(){
    firebase.default.auth().signOut();
  }

}
