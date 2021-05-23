class AuthContext {
  public isLoggedIn : boolean = false

  constructor(isLoggedIn : boolean){
    this.isLoggedIn = isLoggedIn
  }
}

const auth = new AuthContext(false);

export default auth;