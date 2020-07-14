import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EnrollmentListComponent } from './enrollment/enrollment-list/enrollment-list.component';
import { EnrollmentService } from './enrollment/enrollment.service';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    EnrollmentListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
