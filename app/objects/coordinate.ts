
export class Coordinate {

  public x: number;
  public y: number;
  public srid: string;

  constructor(x: number, y: number, srid: string)
  {
    this.x = x;
    this.y = y;
    this.srid = srid;
  }

}
