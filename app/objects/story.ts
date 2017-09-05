import {Address} from "./address";

export class Story {
  id: string

  public title: string
  public description: string

  public name: string

  public address: Address
  public begin: Date
  public end: Date

  constructor(title: string, description: string, address: Address, begin: Date)
  {
    this.title = title;
    this.description = description;
    this.address = address;
    this.begin = begin;

  }

}
