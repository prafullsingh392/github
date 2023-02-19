import { Action } from '@ngrx/store';
import { History } from 'src/app/models/history.model';
import * as HistoryActions from '../actions/history.actions';

export interface HistoryState {
    searches: History[];
}

const initialState: HistoryState = {
    searches: []
}
export function historyReducer(
    state: HistoryState = initialState,
    action: Action
) {
    switch (action.type) {
        case HistoryActions.NEW_SEARCH:
            return {
                ...state,
                searches: [...state.searches, (action as HistoryActions.NewSearch).payload]
            };  
        case HistoryActions.CLEAR_HISTORY:
            return {
                ...state,
                searches:[]
            }      
        default:
            return state;
    }
}