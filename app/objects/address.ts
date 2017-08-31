import {Coordinate} from "../objects/coordinate";

export class Address {

    public realAddress: string;
    public coordinate: Coordinate;

  constructor(realAddress: string)
  {
    this.realAddress = realAddress;
  }
}
