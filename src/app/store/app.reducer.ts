import { ActionReducerMap } from '@ngrx/store';

import {HistoryState,historyReducer} from '../store/reducers/history.reducer'

export interface AppState {
    historyList: HistoryState;
}

export const reducers: ActionReducerMap<AppState> = {
    historyList: historyReducer
};