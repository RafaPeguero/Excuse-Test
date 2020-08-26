
// MODULES
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


//Components
import { AppComponent } from './app.component';
import { ExcusesListComponent } from './excuses-list/excuses-list.component';

//Services
import { ExcusesServiceService } from './Services/excuses-service.service';





@NgModule({
  declarations: [
    AppComponent,
    ExcusesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ExcusesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
