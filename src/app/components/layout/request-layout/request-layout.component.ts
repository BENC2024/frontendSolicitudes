import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestExpenseService } from 'src/app/shared/services/requestExpense/request-expense.service';

@Component({
  selector: 'app-request-layout',
  templateUrl: './request-layout.component.html',
  styleUrls: ['./request-layout.component.scss']
})
export class RequestLayoutComponent {
   category_s: string = ''
   state_s: string = ''
   word_s: string = ''

      //Variables de busqueda: //newItemEvent = new EventEmitter<string>();
   @Output() categoryEvent = new EventEmitter<string>();
   @Output() stateEvent = new EventEmitter<string>();
   @Output() wordEvent = new EventEmitter<string>();

   constructor(
      private router: Router,
      private requestsExpenseService: RequestExpenseService ){
   }

   previewRequests() {
      //Enrutamiento para una nueva solicitud
      this.router.navigate(['/newCashRequests'])
   }

   ngOnDestroy(){}

   //Emitiendo valor
   emitingCategory(){
      this.categoryEvent.emit( this.category_s )
   }
   emitingState(){
      this.stateEvent.emit( this.state_s )
   }
   emitingWord(){
      this.wordEvent.emit( this.word_s )
   }
}
