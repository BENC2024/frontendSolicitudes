import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-list-cash-request',
  templateUrl: './list-cash-request.component.html',
  styleUrls: ['./list-cash-request.component.scss']
})
export class ListCashRequestComponent {

   //Metodos de busqueda
   @Input() category_s: string = ''
   @Input() state_s: string = ''
   @Input() word_s: string = ''

   constructor(){
   }

   protected listRequest: any[] = []

   async ngOnInit(){
      // this.requestExpenseService.listRequest$(/*UserId*/).subscribe( (data$) => {
      //    this.listRequest = data$
      //    console.log(this.listRequest)
      // })

      for (let i = 0; i < this.listRequest.length; i++) {
         this.listRequest[i].dateNow = moment(this.listRequest[i].dateNow).startOf('day').fromNow();   
      }

      console.log("componente iniciado")
   }

   detailRequest(){
   }
}
