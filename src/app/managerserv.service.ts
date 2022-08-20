import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl='http://localhost:8080/api/manager';
@Injectable({
  providedIn: 'root'
})
export class ManagerservService {
  details:any=null;
  constructor(private http:HttpClient) { }
  public get(data:any){
    return this.http.get(`${baseUrl}/${data}`);
  }
}
