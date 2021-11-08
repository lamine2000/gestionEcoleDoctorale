import { Injectable } from '@angular/core';
import {Doctorant} from "../models/doctorant";
import {Subject} from "rxjs";
import * as firebase from "firebase";
import {SpecialUser} from "../models/Special-user";

@Injectable({
  providedIn: 'root'
})
export class SpecialUserService {
  specialUsers: SpecialUser[] = [];
  specialUsersSubject : Subject<SpecialUser[]> = new Subject<SpecialUser[]>();

  constructor() { this.getSpecialsers(); }

  emitSpecialUsers(){
    this.specialUsersSubject.next(this.specialUsers.slice());
  }

  saveDoctorants(){
    firebase.default.database().ref('/special-users').set(this.specialUsers);
  }

  getSpecialsers(){
    firebase.default.database().ref('/special-users').on(
      'value',
      (data) => {
        this.specialUsers = data.val() ? data.val() : [];
        this.emitSpecialUsers();
      }
    );
  }

  getSingleSpecialUser(id: number){
    return new Promise<Doctorant>(
      (resolve, reject) => {
        firebase.default.database().ref('/special-users/'+id).once('value').then(
          (data) => {resolve(data.val());},
          (error) => {reject(error);}
        );
      }
    );
  }

  createNewSpecialUser(specialUser: SpecialUser){
    this.specialUsers.push(specialUser);
    this.saveDoctorants();
    this.emitSpecialUsers();
  }

  removeSpecialUser(specialUser: SpecialUser){
    const specialUserIndexToRemove = this.specialUsers.indexOf(specialUser);
    this.specialUsers.splice(specialUserIndexToRemove, 1);
    this.saveDoctorants();
    this.emitSpecialUsers();
  }
}
