import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRequestComponent } from './components/layout/modal/detail-request/detail-request.component';
import { NewRequestComponent } from './components/layout/modal/new-request/new-request.component';
import { RequestLayoutComponent } from './components/layout/request-layout/request-layout.component';

const routes: Routes = [
   {path: "" , component: RequestLayoutComponent},
   //Este es el valor por defecto pero debe ir aqui la pag principal del proyecto, este es el listado de soli
   {path: "newRequests" , component: NewRequestComponent},
   {path: "detailRequests", component: DetailRequestComponent},
   //{path: "acceptation", component: AcceptationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
