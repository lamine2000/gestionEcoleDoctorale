import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {DoctorantsService} from "../../services/doctorants.service";
import {Doctorant} from "../../models/doctorant";
import {Location} from '@angular/common';

@Component({
  selector: 'app-single-doctorant',
  templateUrl: './single-doctorant.component.html',
  styleUrls: ['./single-doctorant.component.css']
})
export class SingleDoctorantComponent implements OnInit {

  doctorant!: Doctorant;

  constructor(
    private router: Router,
    private doctorantsService: DoctorantsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.doctorantsService.getSingleDoctorant(+id).then(
      (doctorant) => {this.doctorant = doctorant;}
    );
  }

  onBack(){
    this.location.back();
  }

  onApprouver(){
    this.doctorant.precedenteEtape = this.doctorant.etape;
    this.doctorant.etape++;
    this.onBack();
  }

  onRefuser(){
   this.doctorant.precedenteEtape = this.doctorant.etape;
   this.doctorant.etape--;
    this.onBack();
  }

}
