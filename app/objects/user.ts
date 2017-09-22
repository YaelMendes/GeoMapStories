import {Story} from './story';

export class User {

  public name: string
  public group: string;

  public personalStories: Story[];

  constructor(name: string)
  {
    this.name = name;
  }

}

