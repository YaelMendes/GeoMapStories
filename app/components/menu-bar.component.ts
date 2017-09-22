import {Component, Input, Injectable} from '@angular/core';
import {User} from '../objects/user';
import {DataService} from '../services/data.service';
import {VARIABLES} from '../AppSettings';

@Component({
  moduleId: module.id,
  selector: 'story-add-form',
  template: `
      <div class="container">
        <form (ngSubmit)="onSubmit()" #storyForm="ngForm">

        <div class="form-group">
          <label i18n="@@userId" for="name">name</label>
          <input type="text" class="form-control" id="name"
                 required
                 [(ngModel)]="model.user.name" name="name"
                 #name="ngModel">
        </div>

        <div class="form-group">
          <label i18n="@@passwordId" for="author">password</label>
          <input type="text" class="form-control" id="password"
                 required
                 [(ngModel)]="model.user.password" name="password"
                 #name="ngModel">
        </div>

        <button i18n="@@submitId" type="submit" class="btn btn-default">submit</button>
        </form>
      </div>
            `
})
export class StoryAddFormComponent {

  model: User;
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
