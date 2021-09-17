import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopregisterComponent } from './components/workshop/workshopregister/workshopregister.component';
import { HttpClientModule,HttpClient  } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    WorkshopregisterComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
