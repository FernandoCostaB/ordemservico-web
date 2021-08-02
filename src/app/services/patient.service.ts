import { Patient } from "./../models/patiente.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SnackBarService } from "./../shared/snackbarservice.service";

@Injectable({
  providedIn: "root",
})
export class PatientService {
  baseUrl = "http://localhost:8080/pacientes";

  constructor(
    private snackBarService: SnackBarService,
    private http: HttpClient
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBarService.showMessage(msg);
  }
  read(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("OCORREU UM ERRO!", true);
    return EMPTY;
  }
}
