import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl='http://localhost:8080/api/device';
@Injectable({
  providedIn: 'root'
})
export class DeviceservService {

  constructor(private http:HttpClient) { }
  public create(data:any){
    return this.http.post(baseUrl,data);
  }
  public get(){
    return this.http.get(baseUrl);
  }
}
