import { Component, Input } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms'

import { RequestExpenseService } from 'src/app/shared/services/requestExpense/request-expense.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { CompanyService } from 'src/app/shared/services/company/company.service';
import { ThirdPartiesService } from 'src/app/shared/services/thirdParties/third-parties.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { StatusService } from 'src/app/shared/services/status/status.service';
import { MultitenantService } from 'src/app/shared/services/multitenant/multitenant.service';
import * as moment from 'moment';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-new-cash-request',
  templateUrl: './new-cash-request.component.html',
  styleUrls: ['./new-cash-request.component.scss']
})
export class NewCashRequestComponent {

   datemoment: any
   private updateSubscription: Subscription | undefined; //Utilizar programacion reactiva para mostrar fecha en Real Time

   //Validaciones
   formRequest = new FormGroup({
      'amount_v': new FormControl(0, [
         Validators.required,
         Validators.min(1),
         Validators.max(100),
         Validators.pattern(/^-?[0-9]\d*(\d+)?$/)
       ]),
      'description_v': new FormControl('',[
         Validators.required,
         Validators.maxLength(150),
      ]),
      'category_v': new FormControl('',[
         Validators.required,
      ])
   })

   //getter de validaciones
   get amount_v(){ return this.formRequest.get('amount_v') as FormControl } // as para evitar el uso de condicionales en el template
   get description_v(){ return this.formRequest.get('description_v') as FormControl }
   get category_v(){ return this.formRequest.get('category_v')  as FormControl }

   constructor(
      private requestExpenseService: RequestExpenseService,
      private categoryService: CategoryService,
      private companyService: CompanyService,
      private thirdPartiesService: ThirdPartiesService,
      private userService: UserService,
      private statusService: StatusService,
      private multitenantService: MultitenantService){
   }

   //Listado de subscripciones
   private categorySubscription?: Subscription
   private statusSubscription?: Subscription
   private companySubscription?: Subscription 
   private userSubscription?: Subscription

   //Almacenando los datos de la categoria
   // protected dataTenancy: any = undefined//Datos en formato json
   protected dataCompany: any = []
   protected dataUser: any = []
   protected dataThirdParties: any = []
   protected dataCategory: any = []
   protected dataStatus: any = []

   protected requestNew: any = {}
   protected resumen: any = {}

   ngOnInit(){

      this.companySubscription = this.companyService.detailCompany$("65c03d9668305dc160722efe").subscribe( (data$) => {
         this.dataCompany = data$
      })

      this.userSubscription = this.userService.detailUser$("65c0e37220a48899f49cf7ec").subscribe( (data$) => {
         this.dataUser = data$
      })

      this.categorySubscription = this.categoryService.listCategory$().subscribe( (data$) => {
         this.dataCategory = data$
      })

      this.statusSubscription = this.statusService.listStatus$().subscribe( (data$) => {
         this.dataStatus = data$
      })

      console.log("Cargando servicios")
   }

   unsubscribeServices(){
      this.unsubcribeDate()
      // this.multitenantService.unsubscribe()
      this.companySubscription?.unsubscribe()
      this.userSubscription?.unsubscribe()
      // this.thirdPartiesService.unsubscribe()
      
      this.categorySubscription?.unsubscribe()
      this.statusSubscription?.unsubscribe()

      console.log("Cancelando servicios")
   }
   
   enable: boolean = false //Habilitar o deshabilitar funciones como el envio de solicitud

   continueRequest(){
      let texto = 'En proceso'
      let filtroStatus = this.dataStatus.find((obj:any) => obj.nameStatus === texto);
      this.resumen.status = filtroStatus.nameStatus

      this.resumen.company = this.dataCompany.nombreEmpresa
      this.resumen.user = this.dataUser.nombre

      this.requestNew = {
         //"oidTenant": undefined,  this.dataTenancy._id
         "company_id": this.dataCompany._id,
         "user_id": this.dataUser._id,
         //"oidThirdParties": JSON.stringify(objeto) undefined,   // this.dataThirdParties._id
         "category_id": this.formRequest.value['category_v'],
         "dateNow": undefined,
         "amount": this.formRequest.value['amount_v'],
         "description": this.formRequest.value['description_v'],
         "status_id": filtroStatus._id
      }

      this.resumen = {...this.resumen,...this.requestNew}

      console.log(this.resumen)
      this.obtainDate()
      this.enable = !this.enable
   }

   return(){
      this.unsubcribeDate()
      this.enable = !this.enable
   }
   cancel(){
      this.unsubscribeServices()
      this.formRequest.reset()
      this.requestNew = {}
      this.resumen = {}
   }


   saveNewRequest(){
      this.enable = !this.enable
      this.requestNew.dateNow = moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
      this.requestExpenseService.saveNewRequest$(/*this.requestNew*/);
      this.cancel()
   }


   ngOnDestroy(){
      this.cancel()
   }


   //OTRAS FUNCIONES
   private obtainDate(){
      this.updateSubscription = interval(1000).subscribe(() => {
         let dateStatus = new Date()
         this.datemoment = moment(dateStatus).format('L [-] LTS')
      });
   }

   private unsubcribeDate(){
      if (this.updateSubscription) {
         this.updateSubscription.unsubscribe();
         console.log("cerrando fechas")
      }
   }

}
