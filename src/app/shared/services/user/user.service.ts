import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private getURIUser: string = "http://localhost:3000/listUser";
   private getURIOneUser: string = "http://localhost:3000/detailUser";

   constructor( private httpClient: HttpClient ) { }

   getUser$(): Observable<any> {
      return this.httpClient.get(this.getURIUser)
   }

   detailUser$(id:string): Observable<any>{
      return this.httpClient.get(`${this.getURIOneUser}/${id}`)
   }
}
