import {Address} from "./address";

export class Story {
  id: string;
  /* end: Date; */

  constructor(public description: string, public address: Address, public begin: Date)
  {}

}
