import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginModel = new User();

  onSubmit() {
    console.log(this.loginModel)
  }

}
