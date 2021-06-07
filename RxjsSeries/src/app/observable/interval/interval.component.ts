import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  videoSubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    // const broadCastVideos = interval(1000);
    // timer is the operator of the rxjs work same as interval
    const broadCastVideos = timer(5000, 1000);

    this.videoSubscription = broadCastVideos.subscribe(
      res => {
        console.log(res);
        this.obsMsg = 'Video' + res;
        this._designUtility.print(this.obsMsg, 'elContainer');
        this._designUtility.print(this.obsMsg, 'elContainer2');
        this._designUtility.print(this.obsMsg, 'elContainer3');

        if (res >= 5) {
          this.videoSubscription.unsubscribe();
        }
      }
    );
  }

}
