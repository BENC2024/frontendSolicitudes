import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultitenantService {

   constructor( private httpClient: HttpClient ) { }

   private getURI: string = ''

   private multitenant$ = new Observable<any>

   getMultitenant$(): Observable<any>{
      return this.httpClient.get(this.getURI)
   }

   detailMultitenant$(): Observable<any>{
      return this.httpClient.get(this.getURI)
      //return firstValueFrom(this.httpClient.get(this.getURI/*+"/"+id*/))
   }
}
