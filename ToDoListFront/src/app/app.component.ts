import { Component } from '@angular/core';
import { CountryModel } from './models/CountryModel';
import { CaseModel } from './models/CaseModel';
import { NgFor } from '@angular/common';
import { CaseService } from './case.service';
import { HttpClientModule, HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor,HttpClientModule],
  providers:[CaseService,HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoListFront';
  public countries: CountryModel[] = [];

  public casesStack: CaseModel[]=[];
 
  
 constructor( 
  private CaseService: CaseService){ }

public ngOnInit(){
  console.log("Did it")
  this.CaseService.get('',false).subscribe(
    cases=>{
      this.casesStack=cases;
    });
}
}

