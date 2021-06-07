import { DesignUtilityService } from './../../appServices/design-utility.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(
      res => {
        let countVal = 'Video ' + count++;

        this._designUtility.print(countVal, 'elContainer');
        this._designUtility.print(countVal, 'elContainer2');
      });
  }

}
