import { Injectable,NgModule } from '@angular/core';
import {environment} from "../../src/environment/environment"
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { CaseModel } from "./models/CaseModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
@NgModule({
  imports: [HttpClientModule],
  providers:[HttpClient]
})
export class CaseService {

  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  public get(filterString: string, getOnlyInWork:boolean):Observable<CaseModel[]>{
      return this.http.get<CaseModel[]>(this.apiUrl+'/getcases',{
          params:{
              filterString:filterString,
              getOnlyInWork:getOnlyInWork
          }
      })
    }
}
