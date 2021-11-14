import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from "@angular/router";
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "./services/auth-guard.service";
import { AdminComponent } from './user-views/admin/admin.component';
import { SecretaireEdmiComponent } from './user-views/secretaire-edmi/secretaire-edmi.component';
import { DirecteurTheseComponent } from './user-views/directeur-these/directeur-these.component';
import { ResponsableFormationDoctoraleComponent } from './user-views/responsable-formation-doctorale/responsable-formation-doctorale.component';
import { DoctorantComponent } from './user-views/doctorant/doctorant.component';
import { SingleDoctorantComponent } from './user-views/single-doctorant/single-doctorant.component';
import { DirecteurLaboratoireComponent } from './user-views/directeur-laboratoire/directeur-laboratoire.component';
import {DirecteurEcoleDoctoraleComponent} from "./user-views/directeur-ecole-doctorale/directeur-ecole-doctorale.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: FormulaireInscriptionComponent },
  { path: 'doctorant/view/:id', component: DoctorantComponent },
  { path: 'secretaire-edmi', component: SecretaireEdmiComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'directeur-these', component: DirecteurTheseComponent },
  { path: 'doctorants/single/:id', component: SingleDoctorantComponent },
  { path: 'directeur-laboratoire', component: DirecteurLaboratoireComponent },
  { path: 'responsable-formation-doctorale', component: ResponsableFormationDoctoraleComponent },
  { path: 'directeur-ecole-doctorale', component: DirecteurEcoleDoctoraleComponent },
  { path: '', component: AccueilComponent },
  { path: '**', component: FourOFourComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AccueilComponent,
    FourOFourComponent,
    FormulaireInscriptionComponent,
    AdminComponent,
    SecretaireEdmiComponent,
    DirecteurTheseComponent,
    ResponsableFormationDoctoraleComponent,
    DoctorantComponent,
    SingleDoctorantComponent,
    DirecteurLaboratoireComponent,
    DirecteurEcoleDoctoraleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
