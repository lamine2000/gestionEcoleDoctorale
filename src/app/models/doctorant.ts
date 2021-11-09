export class Doctorant {
  public compteActif: string;
  public etape: number;
  public precedenteEtape: number;
  public motDePasse: string;
  public fichierProjet: string;

  constructor(
    public nom: string,
    public prenom: string,
    public nomEpouse: string,
    public telephone: string,
    public email: string,
    public adresse: string,
    public diplome: string,
    public specialite: string,
    public universiteObtentionDiplome: string,
    public paysObtentionDiplome: string,
    public villeObtentionDiplome: string,
    public dateObtentionDiplome: string,
    public intituleDoctorat: string,
    public etablissementRattachement: string,
    public ecoleDoctorale: string,
    public laboratoireAccueil: string,
    public adresseLaboratoireAccueil: string,
    public sujetThese: string,
    public enCotutelle: boolean,
    public nomEtablissementPartenaire: string | null,
    public adresseEtablissementPartenaire: string | null,
    public nomPrenomResponsableFormationDoctoraleEtablissementPartenaire: string | null,
    public nomPrenomGradeDirecteurTheseEtablissementPartenaire: string | null
  ){
    this.compteActif = "false";
    this.precedenteEtape = 0;
    this.etape = 1;
    this.motDePasse = "passer";
    this.fichierProjet = '';
  }
}
