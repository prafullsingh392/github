import { Action } from '@ngrx/store';
import { History } from '../../models/history.model';


export const NEW_SEARCH = 'NEW_SEARCH'
export const CLEAR_HISTORY = 'CLEAR_HISTORY'

export class NewSearch implements Action {
    readonly type = NEW_SEARCH;
  
    constructor(public payload: History) {}
}

export class ClearHistory implements Action {
    readonly type = CLEAR_HISTORY;
}

export type HistoryActions =
  | NewSearch
  | ClearHistory;