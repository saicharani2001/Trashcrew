import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl='http://localhost:8080/api/feedback';
@Injectable({
  providedIn: 'root'
})
export class FeedbackservService {
  getAll() {
    return this.http.get(baseUrl);
  }

  constructor(private http:HttpClient) { }
  public create(data:any){
    return this.http.post(baseUrl,data);
  }
  get(location:any){
    return this.http.get(`${baseUrl}/${location}`);
  }
}
