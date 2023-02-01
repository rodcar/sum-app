import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SumFormComponent } from './sum-form/sum-form.component';
import { SumService } from './services/sum.service';

@NgModule({
  declarations: [
    AppComponent,
    SumFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
