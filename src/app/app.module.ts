import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { SearchComponent } from './components/layout/views/search/search.component';
import { RequestLayoutComponent } from './components/layout/request-layout/request-layout.component';
import { NewRequestComponent } from './components/layout/modal/new-request/new-request.component';
import { DetailRequestComponent } from './components/layout/modal/detail-request/detail-request.component';
import { RequestTableComponent } from './components/layout/views/request-table/request-table.component';
import { ListCashRequestComponent } from './components/logic/list-cash-request/list-cash-request.component';
import { NewCashRequestComponent } from './components/logic/new-cash-request/new-cash-request.component';
import { BtnNewComponent } from './components/layout/views/btn-new/btn-new.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RequestLayoutComponent,
    NewRequestComponent,
    DetailRequestComponent,
    RequestTableComponent,
    ListCashRequestComponent,
    NewCashRequestComponent,
    RequestTableComponent,
    BtnNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
