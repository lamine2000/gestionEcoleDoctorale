import { Component, OnInit } from '@angular/core';
import {Doctorant} from "../../models/doctorant";
import {Subscription} from "rxjs";
import {DoctorantsService} from "../../services/doctorants.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-directeur-these',
  templateUrl: './directeur-these.component.html',
  styleUrls: ['./directeur-these.component.css']
})
export class DirecteurTheseComponent implements OnInit {

  demandesEnAttente: Doctorant[] = [];
  demandesSecretaireEdmi: Doctorant[] = [];
  demandesDirecteurLabo: Doctorant[] = [];
  demandesResponsableFormationDoctorale: Doctorant[] = [];
  demandesDirecteurEcoleDoctorale: Doctorant[] = [];

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
      if(elt.etape == 1 || !elt.compteActif){
        this.demandesEnAttente.push(elt);
      }
      else if(elt.etape == 2){
        this.demandesSecretaireEdmi.push(elt);
      }
      else if(elt.etape == 3){
        this.demandesDirecteurLabo.push(elt);
      }
      else if(elt.etape == 4){
        this.demandesResponsableFormationDoctorale.push(elt);
      }
      else if(elt.etape == 5){
        this.demandesDirecteurEcoleDoctorale.push(elt);
      }
    }
  }

  onViewDoctorant(i: number){
    let realIndex: number = this.doctorants.indexOf(this.demandesEnAttente[i]);
    this.router.navigate(['/doctorants', 'single', realIndex]);
  }

  ngOnDestroy(){
    this.doctorantsSubscription.unsubscribe();
  }
}
