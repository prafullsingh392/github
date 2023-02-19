import { Component } from '@angular/core';
import { GithubapisService } from 'src/app/services/githubapis.service';
import { Store } from '@ngrx/store';
import * as appReducer from 'src/app/store/app.reducer';
import { History } from 'src/app/models/history.model';
import * as HistoryActions from '../../../store/actions/history.actions';
import { User } from 'src/app/models/user.model';

//interface GithubRes {incomplete_results:boolean,items:User[],total_count:number}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public searchTerm:string = ''
  public searchResults:User[] = []
  public searchFlag:boolean = false
  constructor(private github:GithubapisService,private store:Store<appReducer.AppState>){
  }

  onKeywordChange(){
    this.searchFlag = false
    this.searchResults = []
  }

  onSearch(){
    this.searchResults = []    
    this.github.getGithubUser(this.searchTerm).subscribe(
      (res:any) => {
        this.searchFlag = true
        let obj:History = {
          searchKey: this.searchTerm,
          searchResults:[]
        }
        if(res.items){
             obj.searchResults = res.items
             this.searchResults = res.items      
        }
        this.store.dispatch(new HistoryActions.NewSearch(obj));
      },
      err => {
        this.searchFlag = true
        let obj:History = {
          searchKey: this.searchTerm,
          searchResults:[]
        }
        this.store.dispatch(new HistoryActions.NewSearch(obj));
        //console.log(err)
      }
    )
  }
}
