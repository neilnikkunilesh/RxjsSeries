import { Component, OnInit } from '@angular/core';

/*
  Observable Stream
    - User Input (Button Click Event)
    - Http Request
    - Array
    - Object

  Observable Handle following things(subscribe)
    - Data
    - Error
    - Completion
  How to handle Observable
  .subscribe(
    (data) => console.log(data),
    (err) => console.log(err);
    () => console.log('Complete');

  )
*/
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
