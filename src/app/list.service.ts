import { Injectable } from '@angular/core';
import { HttpClient}    from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  url="../assets/list.json";
  //url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getlist(){
 return this.http.get(this.url);
  }

  
}
