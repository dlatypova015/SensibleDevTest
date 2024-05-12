import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from "../../environment/environment"
import { Observable } from "rxjs";
import { CaseModel } from "../models/CaseModel";

@Injectable()
export class CaseService{
    
    private apiUrl: string;

    constructor (private http: HttpClient){
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

// [HttpPost]
// [Route("addcase")]
// public void Add(CaseDTOModel caseDTOModel)
// {
//     _casesRepository.Add(caseDTOModel.GetCase());
// }

// [HttpPost]
// [Route("updatecase")]
// public void Update(CaseDTOModel caseDTOModel)
// {
//     _casesRepository.Update(caseDTOModel.GetCase());
// }

// [HttpPost]
// [Route("docasetask")]
// public void DoTask(Guid Id)
// {
//     var caseModel = _casesRepository.Get(Id);
//     caseModel.CloseDate = DateTime.Now;
//     _casesRepository.Update(caseModel);
// }

// [HttpDelete]
// [Route("deletecase")]
// public void Delete(Guid Id)
// {
//     _casesRepository.Delete(Id);
// }
}