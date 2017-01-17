import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let storiesList = [
      {description: "birth", begin: '1977-10-02'},
      {description: "this is a short descr"},
      {description: "this is another story"}
    ];
    return {storiesList};
  }
}
