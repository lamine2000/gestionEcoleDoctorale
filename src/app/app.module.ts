import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authenticatication.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorantViewComponent } from './doctorant-view/doctorant-view.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule, Routes} from "@angular/router";
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: FormulaireInscriptionComponent },
  { path: '', component: AccueilComponent },
  { path: '**', component: FourOFourComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DoctorantViewComponent,
    AccueilComponent,
    FourOFourComponent,
    FormulaireInscriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
