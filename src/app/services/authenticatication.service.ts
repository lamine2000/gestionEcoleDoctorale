export class AuthenticationService{
  isAuth:boolean = false;
  typeUser?:string;

  login(username:string, password:string){
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 1000
        );
      }
    );
  }

  logout(){
    this.isAuth = false;
  }

}
