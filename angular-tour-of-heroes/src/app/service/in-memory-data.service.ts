/**
 * Created by 鑫 on 2017/6/10.
 */
import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let heroes= [
      {id: 11, name: 'Mr.Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Cwleritas'},
      {id: 15, name: 'magneta'},
      {id: 16, name: 'RubbermMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Toenado'}
    ];
    return {heroes};
  }
}
