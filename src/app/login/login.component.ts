import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginContainer", null) loginContainer : ElementRef;
  
  constructor() {
  }

  
  ngOnInit() {
  }

  signUp(){
    this.loginContainer.nativeElement.classList.add('right-panel-active');
  }

  signIn(){
    this.loginContainer.nativeElement.classList.remove('right-panel-active');
  }


}
