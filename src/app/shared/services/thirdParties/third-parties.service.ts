import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartiesService {
   
   private getURIThirdParties: string = "";

   constructor( private httpClient: HttpClient ) { }

   getThirdParties$(): Observable<any> {
      return this.httpClient.get(this.getURIThirdParties)
   }

   detailThirdParties$(): Observable<any> {
      return this.httpClient.get(this.getURIThirdParties)
      //return firstValueFrom(this.httpClient.get(this.getURIThirdParties/*+"/"+id*/))
   }
}
