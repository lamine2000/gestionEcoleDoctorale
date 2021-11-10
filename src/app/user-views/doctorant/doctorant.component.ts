import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Doctorant} from "../../models/doctorant";
import {DoctorantsService} from "../../services/doctorants.service";

@Component({
  selector: 'app-doctorant',
  templateUrl: './doctorant.component.html',
  styleUrls: ['./doctorant.component.css']
})
export class DoctorantComponent implements OnInit {

  doctorant!: Doctorant;
  steps: string[] =
    [
      'directeur-these',
      'secretaire-edmi',
      'directeur-laboratoire',
      'responsable-formation-doctorale',
      'directeur-ecole-doctorale'
    ]
  i!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private doctorantsService: DoctorantsService
  ) { }

  ngOnInit(): void {
    this.i = this.route.snapshot.params['id'];
    this.doctorantsService.getSingleDoctorant(+this.i).then(
      (doctorant) => {this.doctorant = doctorant;}
    );
  }

  getStyle(step: string){
    let etape = this.steps.indexOf(step)+1;
    if(this.doctorant.etape == etape){
      return 'orange';
    }
    else if(this.doctorant.etape > etape){
      return 'green';
    }
    else{
      return 'red';
    }
  }


}
