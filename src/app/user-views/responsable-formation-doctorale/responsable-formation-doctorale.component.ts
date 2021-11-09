import { Component, OnInit } from '@angular/core';
import {Doctorant} from "../../models/doctorant";
import {Subscription} from "rxjs";
import {DoctorantsService} from "../../services/doctorants.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-responsable-formation-doctorale',
  templateUrl: './responsable-formation-doctorale.component.html',
  styleUrls: ['./responsable-formation-doctorale.component.css']
})
export class ResponsableFormationDoctoraleComponent implements OnInit {

  demandesEnAttente: Doctorant[] = [];
  doctorants: Doctorant[] = [];
  doctorantsSubscription! : Subscription;
  isEncadrant: Boolean = false;

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
    this.isEncadrant = false;
    this.demandesEnAttente = [];
    for (const elt of this.doctorants) {
      if(elt.etape == 4){
        this.demandesEnAttente.push(elt);
      }
    }
  }

  viewEncadrants(){
    this.isEncadrant = true;
  }

  onViewDoctorant(i: number){
    let realIndex: number = this.doctorants.indexOf(this.demandesEnAttente[i]);
    this.router.navigate(['/doctorants', 'single', realIndex]);
  }



  ngOnDestroy(){
    this.doctorantsSubscription.unsubscribe();
  }

}
