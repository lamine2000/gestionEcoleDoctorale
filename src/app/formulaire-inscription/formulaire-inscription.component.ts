import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DoctorantsService} from "../services/doctorants.service";
import {Doctorant} from "../models/doctorant";

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent implements OnInit {

  inscriptionForm!: FormGroup;
  fileIsUploading: boolean = false;
  fileUrl!: any;
  fileUploaded: boolean = false

  constructor(
    private doctorantsService: DoctorantsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.inscriptionForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        nomEpouse: '',
        telephone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        adresse: ['', Validators.required],
        diplome: ['', Validators.required],
        specialite: ['', Validators.required],
        universiteObtentionDiplome: ['', Validators.required],
        paysObtentionDiplome: ['', Validators.required],
        villeObtentionDiplome: ['', Validators.required],
        dateObtentionDiplome: ['', Validators.required],
        intituleDoctorat: ['', Validators.required],
        etablissementRattachement: ['', Validators.required],
        ecoleDoctorale: ['', Validators.required],
        laboratoireAccueil: ['', Validators.required],
        adresseLaboratoireAccueil: ['', Validators.required],
        sujetThese: ['', Validators.required],
        enCotutelle: '',
        nomEtablissementPartenaire: '',
        adresseEtablissementPartenaire: '',
        nomPrenomResponsableFormationDoctoraleEtablissementPartenaire: '',
        nomPrenomGradeDirecteurTheseEtablissementPartenaire: '',
        fichierProjet: ['', Validators.required],
        emailEncadrant: ['', [Validators.required, Validators.email]]
      }
    );
    console.log(this.inscriptionForm);
  }

  onSubmitDemande(){
    // @ts-ignore
    let nom = this.inscriptionForm.get('nom').value;
    // @ts-ignore
    let prenom = this.inscriptionForm.get('prenom').value;
    // @ts-ignore
    let nomEpouse = this.inscriptionForm.get('nomEpouse').value;
    // @ts-ignore
    let telephone = this.inscriptionForm.get('telephone').value;
    // @ts-ignore
    let email = this.inscriptionForm.get('email').value;
    // @ts-ignore
    let adresse = this.inscriptionForm.get('adresse').value;
    // @ts-ignore
    let diplome = this.inscriptionForm.get('diplome').value;
    // @ts-ignore
    let specialite = this.inscriptionForm.get('specialite').value;
    // @ts-ignore
    let universiteObtentionDiplome = this.inscriptionForm.get('universiteObtentionDiplome').value;
    // @ts-ignore
    let paysObtentionDiplome = this.inscriptionForm.get('paysObtentionDiplome').value;
    // @ts-ignore
    let villeObtentionDiplome = this.inscriptionForm.get('villeObtentionDiplome').value;
    // @ts-ignore
    let dateObtentionDiplome = this.inscriptionForm.get('dateObtentionDiplome').value;
    // @ts-ignore
    let intituleDoctorat = this.inscriptionForm.get('intituleDoctorat').value;
    // @ts-ignore
    let etablissementRattachement = this.inscriptionForm.get('etablissementRattachement').value;
    // @ts-ignore
    let ecoleDoctorale = this.inscriptionForm.get('ecoleDoctorale').value;
    // @ts-ignore
    let laboratoireAccueil = this.inscriptionForm.get('laboratoireAccueil').value;
    // @ts-ignore
    let adresseLaboratoireAccueil = this.inscriptionForm.get('adresseLaboratoireAccueil').value;
    // @ts-ignore
    let sujetThese = this.inscriptionForm.get('sujetThese').value;
    // @ts-ignore
    let enCotutelle = this.inscriptionForm.get('enCotutelle').value;
    // @ts-ignore
    let nomEtablissementPartenaire = this.inscriptionForm.get('nomEtablissementPartenaire').value;
    // @ts-ignore
    let adresseEtablissementPartenaire = this.inscriptionForm.get('adresseEtablissementPartenaire').value;
    // @ts-ignore
    let nomPrenomResponsableFormationDoctoraleEtablissementPartenaire = this.inscriptionForm.get('nomPrenomResponsableFormationDoctoraleEtablissementPartenaire').value;
    // @ts-ignore
    let nomPrenomGradeDirecteurTheseEtablissementPartenaire = this.inscriptionForm.get('nomPrenomGradeDirecteurTheseEtablissementPartenaire').value;
    // @ts-ignore
    let emailEncadrant = this.inscriptionForm.get('emailEncadrant').value;

    let doctorant = new Doctorant(
      nom,
      prenom,
      nomEpouse,
      telephone,
      email,
      adresse,
      diplome,
      specialite,
      universiteObtentionDiplome,
      paysObtentionDiplome,
      villeObtentionDiplome,
      dateObtentionDiplome,
      intituleDoctorat,
      etablissementRattachement,
      ecoleDoctorale,
      laboratoireAccueil,
      adresseLaboratoireAccueil,
      sujetThese,
      enCotutelle,
      nomEtablissementPartenaire,
      adresseEtablissementPartenaire,
      nomPrenomResponsableFormationDoctoraleEtablissementPartenaire,
      nomPrenomGradeDirecteurTheseEtablissementPartenaire,
      emailEncadrant
    );

    if(this.fileUrl && this.fileUrl !== ''){
      doctorant.fichierProjet = this.fileUrl.toString();
    }

    this.doctorantsService.createNewDoctorant(doctorant);
    alert("Demande soumise avec succès. Votre compte sera activé après examination de votre dossier");

    this.router.navigate(['/login']);
  }

  isCotutelle(){
    // @ts-ignore
    return !!this.inscriptionForm.get('enCotutelle').value;
  }

  isMissing(){
    // @ts-ignore
    return this.isCotutelle() && (!this.inscriptionForm.get('nomEtablissementPartenaire').value || !this.inscriptionForm.get('adresseEtablissementPartenaire').value || !this.inscriptionForm.get('nomPrenomResponsableFormationDoctoraleEtablissementPartenaire').value || !this.inscriptionForm.get('nomPrenomGradeDirecteurTheseEtablissementPartenaire').value);
  }

  isTel(){
    // @ts-ignore
    let num = this.inscriptionForm.get('telephone').value;
    num = num.split('').filter((e: { trim: () => { (): any; new(): any; length: any; }; }) => e.trim().length).join('');
    return parseInt(num) == num && num.length == 9;
  }

  onUploadFile(file: File){
    this.fileIsUploading = true;
    this.doctorantsService.uploadFile(file).then(
      (url: any) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    )
  }

  detectFiles(event: Event){
    // @ts-ignore
    this.onUploadFile(event.target.files[0]);
  }


  //TODO: moi meme creer les comptes pour les differents utilisateurs (@generiques et mots de passe prédefinis)
  //TODO: ajouter a la database , un nouveau noeud nommé specialAccounts avec ces comptes generiques. A l authentification, suivant le compte de l utilisateur, on pourra determiner quelle vue charger.
  //TODO: Connecter le template login avec son script
  //TODO: designer les vues apres rappel des utilisateurs et de leurs roles
  //TODO: rajouter au model Doctorant, le nombre d'etapes (passees par le dossier). Sur la vue du recteur par example, seront affichees l ensemble des dossiers ayant franchis n etapes
  //TODO: rajouter au model Doctorant le nombre de ... qui doit etre inferieur à 5

}
