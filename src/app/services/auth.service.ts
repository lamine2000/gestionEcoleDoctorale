export class AuthService{
  isAuth:boolean = false;
  typeUser?:string;

  login(username:string, password:string){
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }
        );
      }
    );
  }

  logout(){
    this.isAuth = false;
  }

}
