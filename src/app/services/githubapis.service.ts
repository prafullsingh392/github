import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubapisService {
  private API_URL:string = "https://api.github.com/search/users"
  constructor(private http:HttpClient) { }

  getGithubUser(search:string){
    let user = `user:${search}`
    return this.http.get(this.API_URL,{params:{q:user}})
  }
}
