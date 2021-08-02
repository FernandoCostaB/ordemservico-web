import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderServiceService } from "src/app/services/order-service.service";

@Component({
  selector: "app-order-service-create",
  templateUrl: "./order-service-create.component.html",
  styleUrls: ["./order-service-create.component.css"],
})
export class OrderServiceCreateComponent implements OnInit {
  constructor(
    private orderServiceService: OrderServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  navigateToListOrders(): void {
    this.router.navigate(["/order-service"]);
  }

  saveOrderService(): void {
    this.orderServiceService.showMessage("Salvou");
  }
}
