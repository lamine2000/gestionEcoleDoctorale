import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorantsService } from 'src/app/services/doctorants.service';
import {Doctorant} from "../../models/doctorant";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-secretaire-edmi',
  templateUrl: './secretaire-edmi.component.html',
  styleUrls: ['./secretaire-edmi.component.css']
})
export class SecretaireEdmiComponent implements OnInit {

  demandesEnAttente: Doctorant[] = [];
  doctorants: Doctorant[] = [];
  doctorantsSubscription! : Subscription;

  constructor(
    private doctorantsService: DoctorantsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.doctorantsSubscription = this.doctorantsService.doctorantsSubject.subscribe(
      (doctorants) => {
        this.doctorants = doctorants;
      }
    );
    this.doctorantsService.emitDoctorants();
  }

  viewDemandes(){
    this.demandesEnAttente = [];
    for (const elt of this.doctorants) {
      if(!elt.compteActif){
        this.demandesEnAttente.push(elt);
      }
    }
  }

  onViewDoctorant(i: number){
    let realIndex: number = this.doctorants.indexOf(this.demandesEnAttente[i]);
    this.router.navigate(['/doctorants', 'single', realIndex]);
  }

}
