import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as firebase from "firebase";
import {SpecialUser} from "../models/Special-user";

@Injectable({
  providedIn: 'root'
})
export class SpecialUserService {
  specialUsers: SpecialUser[] = [];
  specialUsersSubject : Subject<SpecialUser[]> = new Subject<SpecialUser[]>();

  constructor() { this.getSpecialUsers(); }

  emitSpecialUsers(){
    this.specialUsersSubject.next(this.specialUsers.slice());
  }

  saveSpecialUsers(){
    firebase.default.database().ref('/special-users').set(this.specialUsers);
  }

  getSpecialUsers(){
    firebase.default.database().ref('/special-users').on(
      'value',
      (data) => {
        this.specialUsers = data.val() ? data.val() : [];
        this.emitSpecialUsers();
      }
    );
  }

  getSingleSpecialUser(id: number){
    return new Promise<SpecialUser>(
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
    this.saveSpecialUsers();
    this.emitSpecialUsers();
  }

  removeSpecialUser(specialUser: SpecialUser){
    const specialUserIndexToRemove = this.specialUsers.indexOf(specialUser);
    this.specialUsers.splice(specialUserIndexToRemove, 1);
    this.saveSpecialUsers();
    this.emitSpecialUsers();
  }
}
