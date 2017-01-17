import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let storiesList = [
      {id: "1", description: "birth", begin: '1977-10-02'},
      {id: "2",description: "this is a short descr",  begin: '1977-10-02'},
      {id: "3",description: "this is another story",  begin: '1977-10-02'}
    ];
    return {storiesList};
  }
}
