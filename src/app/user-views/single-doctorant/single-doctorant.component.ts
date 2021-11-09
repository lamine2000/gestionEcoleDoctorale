import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {DoctorantsService} from "../../services/doctorants.service";
import {Doctorant} from "../../models/doctorant";
import {Location} from '@angular/common';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-single-doctorant',
  templateUrl: './single-doctorant.component.html',
  styleUrls: ['./single-doctorant.component.css']
})
export class SingleDoctorantComponent implements OnInit {

  doctorant!: Doctorant;
  doctorants!: Doctorant[];
  doctorantsSubscription!: Subscription;
  i!: number;

  constructor(
    private router: Router,
    private doctorantsService: DoctorantsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.i = this.route.snapshot.params['id'];
    this.doctorantsService.getSingleDoctorant(+this.i).then(
      (doctorant) => {this.doctorant = doctorant;}
    );

    this.doctorantsSubscription = this.doctorantsService.doctorantsSubject.subscribe(
      (doctorants) => {
        this.doctorants = doctorants;
      }
    );
    this.doctorantsService.emitDoctorants();
  }

  onBack(){
    this.location.back();
  }

  onApprouver(){
    console.log(this.doctorant);
    this.doctorants[this.i].compteActif = "true";
    this.doctorants[this.i].precedenteEtape = this.doctorants[this.i].etape;
    this.doctorants[this.i].etape++;
    this.doctorantsService.saveDoctorants();
    this.onBack();
  }

  onRefuser(){
   this.doctorant.precedenteEtape = this.doctorant.etape;
   this.doctorant.etape--;
   this.doctorantsService.saveDoctorants();
    this.onBack();
  }

}
