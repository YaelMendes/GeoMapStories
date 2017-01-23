import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let storiesList = [
      {id: "1", description: "birth", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
      {id: "2", description: "this is a short descr", address: 'place Vendome 75000 Paris France', begin: '1977-10-02'},
      {id: "3", description: "this is another story",  address: 'place Vendome 75000 Paris France', begin: '1977-10-02'}
    ];
    return {storiesList};
  }
}
