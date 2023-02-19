import { Component,Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() searchResults:User[] = []
  @Input() searchFlag:boolean = false
  constructor(){
    //console.log(this.searchResults)
  }
}
