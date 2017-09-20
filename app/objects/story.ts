import {Address} from './address';
import {User} from './user';

export class Story {
  id: string

  public title: string
  public description: string

  public user: User;

  public address: Address
  public begin: Date
  public end: Date

  constructor(title: string, user: User, description: string, address: Address, begin: Date)
  {
    this.title = title;
    this.user = user;
    this.description = description;
    this.address = address;
    this.begin = begin;

  }

}
