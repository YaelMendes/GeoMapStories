import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Story} from "../objects/story";

import {Address} from "../objects/address";
import {Coordinate} from "../objects/coordinate";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let storiesList = [
      {id: "1", description: "birth", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
      {id: "2", description: "this is a short descr", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
      {id: "3", description: "this is another story",  address: 'place Vendome 75000 Paris France', begin: '1977-10-02'}
    ];
    return {storiesList};
  }

  public static getSomeStories() : Story[]  {
    let st1, st2, st3: Story;

    st1 = new Story("descr1", new Address("addr11"), new Date());
    st2 = new Story("descr2", new Address("addr2"), new Date());
    st3 = new Story("descr3333", new Address("addr3"), new Date());

    st1.address.coordinate = new Coordinate(692249.10, 5804715.26, "EPSG:3857");
    st2.address.coordinate = new Coordinate(692470.47, 5804715.26, "EPSG:3857");
    st3.address.coordinate = new Coordinate(692050.37, 5804715.26, "EPSG:3857");

    let storiesList: Story[];

    storiesList = new Array();

    storiesList.push(st1, st2, st3);

    return storiesList;
  }
}
