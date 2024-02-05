import { Component, ViewChild } from '@angular/core';
import { NewCashRequestComponent } from 'src/app/components/logic/new-cash-request/new-cash-request.component';

@Component({
  selector: 'app-btn-new',
  templateUrl: './btn-new.component.html',
  styleUrls: ['./btn-new.component.scss']
})
export class BtnNewComponent {

   // @ViewChild(NewCashRequestComponent, {static: false}) newCashRequest: NewCashRequestComponent | undefined 
   
   // loadServices(){
   //    this.newCashRequest?.loadServices()
   // }
}
