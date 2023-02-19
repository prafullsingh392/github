import { User } from "./user.model"

export class History {
    public searchKey:string
    public searchResults:User[]

    constructor(searchKey:string,searchResults:[]){
        this.searchKey = searchKey 
        this.searchResults = searchResults
    }
}