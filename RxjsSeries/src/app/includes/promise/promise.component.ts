import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal: any;

  dell = {
    brand: "Dell",
    HD: '1 TB',
    color: 'black'
  }

  hp = {
    brand: "Hp",
    HD: '2 TB',
    color: 'blue'
  }

  notAvail = {
    brand: 'Not available',
    status: 'Failed'
  }
  constructor() { }


  DellAvailable() {
    return false;
  }

  HpAvailable() {
    return false;
  }
  ngOnInit(): void {

    // let buyLaptop = new Promise(function(resolve, reject){
    //   resolve('Promise is resolved');
    // });
    // buyLaptop.then()

    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is reject');
      if (this.DellAvailable()) {
        return setTimeout(() => {
          // resolve('Dell is Purchase');
          resolve(this.dell);
        }, 3000);

      } else if (this.HpAvailable()) {
        return setTimeout(() => {
          // resolve('Hp is purchased');
          resolve(this.hp);
        }, 3000);

      } else {
        return setTimeout(() => {
          // reject('Laptop is not available on store');
          reject(this.notAvail);
        }, 3000);

      }
    });
    buyLaptop.then(res => {
      console.log('then =>', res);
      this.promiseVal = res;
    }).catch(err => {
      console.log('catch code =>', err);
      this.promiseVal = err;
    });

  }


}
function res(arg0: string, res: any): void | PromiseLike<void> {
  throw new Error('Function not implemented.');
}

