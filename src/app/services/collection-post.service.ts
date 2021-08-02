import { CollectionPost } from "./../models/collectionpost.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { SnackBarService } from "./../shared/snackbarservice.service";

@Injectable({
  providedIn: "root",
})
export class CollectionPostService {
  baseUrl = "http://localhost:8080/postos-coleta";

  constructor(
    private snackBarService: SnackBarService,
    private http: HttpClient
  ) {}

  read(): Observable<CollectionPost[]> {
    return this.http.get<CollectionPost[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("OCORREU UM ERRO!", true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBarService.showMessage(msg);
  }
}
