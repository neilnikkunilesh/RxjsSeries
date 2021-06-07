import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

    // method to use append element into <ul> element
    print(val, containerId) {
      let el = document.createElement('li');
      el.innerText = val;
      document.getElementById(containerId)?.appendChild(el);
    }
}
