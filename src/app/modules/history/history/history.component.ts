import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { History } from 'src/app/models/history.model';
import * as appReducer from '../../../store/app.reducer'
import * as HistoryActions from '../../../store/actions/history.actions';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  searches: Observable<{ searches: History[] }>;
  historyList:History[] = []
  constructor(private store: Store<appReducer.AppState>){}

  ngOnInit() {
    this.searches = this.store.select('historyList');
    this.searches.subscribe(
      (res:{searches:History[]}) => {
        this.historyList = res.searches
        //console.log(this.historyList)
      }
    )
  }

  clearHistory(){
    this.store.dispatch(new HistoryActions.ClearHistory())
  }

}
