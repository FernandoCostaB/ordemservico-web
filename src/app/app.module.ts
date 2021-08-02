import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { MatCardModule } from "@angular/material/card";
import { OrderserviceCrudComponent } from "./views/orderservice-crud/orderservice-crud.component";
import { OrderServiceCreateComponent } from "./components/order-service/order-service-create/order-service-create.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";


import { HttpClientModule } from "@angular/common/http";
import { OrderServiceReadComponent } from "./components/order-service/order-service-read/order-service-read.component";
import { PatientReadComponent } from "./components/patient/patient-read/patient-read.component";
import { CollectionPostReadComponent } from './components/collection-post/collection-post-read/collection-post-read.component';
import { DoctorReadComponent } from './components/doctor/doctor-read/doctor-read.component';
import { ExamReadComponent } from './components/exam/exam-read/exam-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    OrderserviceCrudComponent,
    OrderServiceCreateComponent,
    OrderServiceReadComponent,
    PatientReadComponent,
    CollectionPostReadComponent,
    DoctorReadComponent,
    ExamReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
