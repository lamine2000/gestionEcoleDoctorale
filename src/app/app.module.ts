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
import {DoctorantViewComponent} from "./views/doctorant-view/doctorant-view.component";
import {AuthGuardService} from "./services/auth-guard.service";

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: FormulaireInscriptionComponent },
  { path: 'doctorant/view/:id', component: DoctorantViewComponent },
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
