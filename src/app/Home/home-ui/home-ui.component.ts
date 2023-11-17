import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.css']
})
export class HomeUiComponent implements OnInit{
  foundUsers$!: Observable<any[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.foundUsers$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.mGetSearch(term)),
    // );

  }

  mGetSearch(term:string):Observable<any>{

    const oo = [1, 2, 3, 5]

    const ssearchData = new BehaviorSubject<any>({});

    // BehaviorSubject bh = new BehaviorSubject();

    return ssearchData;
  }

}
