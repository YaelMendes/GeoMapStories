import { Component } from '@angular/core';
import {Story} from "../objects/story";

@Component({
  moduleId: module.id,
  selector: 'story-add-form',
  templateUrl: '../html/story-add-form.component.html'
})
export class AddStoryFormComponent {

  model = new Story("my desss", 'my addrersrsr', new Date())
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
