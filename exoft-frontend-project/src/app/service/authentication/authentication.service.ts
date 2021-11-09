import { SignInData } from './../../model/signInData';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MockedUsers } from 'src/app/model/mockedUsers';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['working-place']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }

  private checkEmail(email: string): boolean{
    return email === this.mockedUser1.getEmail() || email === this.mockedUser2.getEmail();
  }

  private checkPassword(password: string): boolean{
    return password === this.mockedUser1.getPassword() || password === this.mockedUser2.getPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
