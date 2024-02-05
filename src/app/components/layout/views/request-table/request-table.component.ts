import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent {

   @Input() category_s: string = ''
   @Input() state_s: string = ''
   @Input() word_s: string = ''

   
}
