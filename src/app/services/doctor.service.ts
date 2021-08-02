import { Doctor } from "./../models/doctor.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { OrderService } from "./../models/orderservice.model";
import { SnackBarService } from "./../shared/snackbarservice.service";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  baseUrl = "http://localhost:8080/medicos";

  constructor(
    private snackBarService: SnackBarService,
    private http: HttpClient
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBarService.showMessage(msg);
  }

  read(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("OCORREU UM ERRO!", true);
    return EMPTY;
  }
}
