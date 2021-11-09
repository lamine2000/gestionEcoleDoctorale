import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SpecialUserService} from "../services/special-user.service";
import {DoctorantsService} from "../services/doctorants.service";
import {Subscription} from "rxjs";
import {Doctorant} from "../models/doctorant";
import {SpecialUser} from "../models/Special-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  doctorantsSubscription! : Subscription;
  spesialUsersSubscription! : Subscription;

  doctorants!: Doctorant[];
  specialUsers!: SpecialUser[];

  isUser: Boolean = true;
  isActive: Boolean = true;

  constructor(private formBuilder: FormBuilder,
              private specialUsersService: SpecialUserService,
              private doctorantsService: DoctorantsService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();

    this.doctorantsSubscription = this.doctorantsService.doctorantsSubject.subscribe(
      (doctorants) => {
        this.doctorants = doctorants;
      }
    );
    this.doctorantsService.emitDoctorants();

    this.spesialUsersSubscription = this.specialUsersService.specialUsersSubject.subscribe(
      (specialUsers) => {
        this.specialUsers = specialUsers;
      }
    );
    this.specialUsersService.emitSpecialUsers();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignIn(){
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    for (let i = 0; i < this.specialUsers.length; i++) {
      //special user is connecting
      if(
        this.specialUsers[i].email === email.toString() &&
        this.specialUsers[i].password === password.toString()
      ){
        this.router.navigate(["/" + this.specialUsers[i].role]);
      }

      //doctorant connecting
      else if (
        this.doctorants[i].email === email.toString() &&
        password.toString() === 'passer'
      ){
        if(this.doctorants[i].compteActif !== "false") {
          this.router.navigate(['/doctorant', 'view', i]);
        }
        else{
          this.isActive = false;
        }
      }

      //wrong email/password
      else{
        this.isUser = false;
      }
    }
  }

  ngOnDestroy(): void {
    this.doctorantsSubscription.unsubscribe();
    this.spesialUsersSubscription.unsubscribe();
  }

}
