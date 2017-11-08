import {Component, Input, Injectable} from '@angular/core';
import {User} from '../objects/user';
import {DataService} from '../services/data.service';
import {VARIABLES} from '../AppSettings';

@Component({
  selector: 'menu-bar',
  templateUrl: '../html/menu-bar.component.html',
  styleUrls: ['../css/menu-bar.component.css']
})
export class MenuBarComponent {

  model: User = new User('yafou');
  connected: boolean=false;

  constructor(private dataService: DataService) {
  }

  onSubmit() {
    console.log('onSubmit is called !  model=' + this.model);

    this.tryConnect(this.model);
  }


  private tryConnect(model: User) {

    if (VARIABLES.MODE_TEST) {

      this.connected=true;
      this.model = this.retrieveUserInfos();

    } else {
      //TODO: call backend to check user/pwd and retrieve infos/stories/....
    }
  }

  private retrieveUserInfos(): User {

    return this.model;
  }

}
