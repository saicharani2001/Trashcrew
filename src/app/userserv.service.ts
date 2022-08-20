import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl='http://localhost:8080/api/registration';
@Injectable({
  providedIn: 'root'
})
export class UserservService {
  details:any=null;
  details1:any;
  constructor(private http:HttpClient) { }
  public create(data:any){
    return this.http.post(baseUrl,data);
  }
  public get(data:any){
    return this.http.get(`${baseUrl}/${data}`);
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  public delete(data:any){
    return this.http.delete(`${baseUrl}/${data}`);
  }
  public update(id:any,data:any){
    return this.http.put(`${baseUrl}/${id}`,data);
  }
}
