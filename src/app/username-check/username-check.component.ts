import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {
  usernameInputIsEmpty: boolean = true;
  constructor() { }
  username: string = '';
  ngOnInit(): void {
  }

  onUserInput(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
    this.resetButtonDisableStatusChange();
  }

  resetButtonDisableStatusChange(){
    if (this.username !== '') {
      this.usernameInputIsEmpty = false;
    }
  }

  emptyUsernameInput(){
    this.username = '';
    this.usernameInputIsEmpty = true;

  }

}
