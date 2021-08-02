import { SnackBarService } from "./../shared/snackbarservice.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrderServiceService {
  constructor(private snackBarService: SnackBarService) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBarService.showMessage(msg);
  }
}
