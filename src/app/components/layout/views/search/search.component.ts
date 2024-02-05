import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { StatusService } from 'src/app/shared/services/status/status.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
   constructor(
      private categoryService: CategoryService,
      private stateService: StatusService ){
   }

   //Variables de busqueda: //newItemEvent = new EventEmitter<string>();
   @Output() categoryEvent = new EventEmitter<string>();
   @Output() statusEvent = new EventEmitter<string>();
   @Output() wordEvent = new EventEmitter<string>();

   category_s: string = ''
   state_s: string = ''
   word_s: string = ''

   protected dataCategory: any[] = []
   protected dataStatus: any[] = []

   async ngOnInit(){
      this.categoryService.listCategory$().subscribe( (data$) => {
         this.dataCategory = data$
      })

      this.stateService.listStatus$().subscribe( (data$) => {
         this.dataStatus = data$
      })
   }

   //Emitiendo valor
   emitingCategory(){
      this.categoryEvent.emit( this.category_s )
   }
   emitingState(){
      this.statusEvent.emit( this.state_s )
   }
   emitingWord(){
      this.wordEvent.emit( this.word_s )
   }
}
