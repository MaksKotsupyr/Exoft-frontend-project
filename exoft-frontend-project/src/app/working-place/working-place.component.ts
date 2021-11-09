import { SignInData } from '../model/signInData';
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './../service/authentication/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: '../working-place/working-place.component.html',
  styleUrls: ['../working-place/working-place.component.scss']
})
    
export class WorkingPlaceComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
