import { Injectable } from '@angular/core';
import {Doctorant} from "../models/doctorant";
import {Subject} from "rxjs";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class DoctorantsService {

  doctorants: Doctorant[] = [];
  doctorantsSubject : Subject<Doctorant[]> = new Subject<Doctorant[]>();

  constructor() { this.getDoctorants(); }

  emitDoctorants(){
    this.doctorantsSubject.next(this.doctorants.slice());
  }

  saveDoctorants(){
    firebase.default.database().ref('/doctorants').set(this.doctorants);
  }

  getDoctorants(){
    firebase.default.database().ref('/doctorants').on(
      'value',
      (data) => {
        this.doctorants = data.val() ? data.val() : [];
        this.emitDoctorants();
      }
    );
  }

  getSingleDoctorant(id: number){
    return new Promise<Doctorant>(
      (resolve, reject) => {
        firebase.default.database().ref('/doctorants/'+id).once('value').then(
          (data) => {resolve(data.val());},
          (error) => {reject(error);}
        );
      }
    );
  }

  createNewDoctorant(doctorant: Doctorant){
    this.doctorants.push(doctorant);
    this.saveDoctorants();
    this.emitDoctorants();
  }

  removeDoctorant(doctorant: Doctorant){
    const doctorantIndexToRemove = this.doctorants.indexOf(doctorant);
    this.doctorants.splice(doctorantIndexToRemove, 1);
    this.saveDoctorants();
    this.emitDoctorants();
  }
}
