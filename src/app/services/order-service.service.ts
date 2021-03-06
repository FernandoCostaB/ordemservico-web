import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { OrderService } from "./../models/orderservice.model";
import { SnackBarService } from "./../shared/snackbarservice.service";

@Injectable({
  providedIn: "root",
})
export class OrderServiceService {
  baseUrl = "http://localhost:8080/ordem-servicos";

  constructor(
    private snackBarService: SnackBarService,
    private http: HttpClient
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBarService.showMessage(msg);
  }

  create(orderService: OrderService): Observable<any> {
    return this.http.post<any>(this.baseUrl, orderService).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<OrderService[]> {
    return this.http.get<OrderService[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("OCORREU UM ERRO!", true);
    return EMPTY;
  }
}
