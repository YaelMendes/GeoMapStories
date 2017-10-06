import {Story} from './story';
import {Group} from './group';
import {VARIABLES} from '../AppSettings';

export class User {

  public name: string
  public password: string;

  public color: string = VARIABLES.DEFAULT_USER_MAP_COLOR;

  public group: Group;

  public personalStories: Story[];

  constructor(name: string) {
    this.name = name;
  }

}

