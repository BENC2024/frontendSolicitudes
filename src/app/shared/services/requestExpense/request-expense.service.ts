import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

import { CategoryService } from '../category/category.service';
import { CompanyService } from '../company/company.service';
import { ThirdPartiesService } from '../thirdParties/third-parties.service';
import { StatusService } from '../status/status.service';
import { MultitenantService } from '../multitenant/multitenant.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestExpenseService {

   private getURIRequest: string = "";
   private postURIRequest: string = "";

   constructor(
      private httpClient: HttpClient,
      private categoryService: CategoryService,
      private companyService: CompanyService,
      private thirdPartiesService: ThirdPartiesService,
      private userService: UserService,
      private statusService: StatusService,
      private multitenantService: MultitenantService
    ) { }

   //El signo de peso es por buenas practicas del observable
   request$ : any; //Objeto
   requestResumen$ : any

   saveNewRequest$(/*request: any*/){
      //return this.httpClient.post(this.postURIRequest,request) //agregar pipe
   }

   listRequest$(): Observable<any>{
      //return this.httpClient.get(this.getURIRequest) //agregar pipe
      return of(this.request$)
   }

   detailRequest$(): Observable<any>{
      return of(this.request$)
   }

}

