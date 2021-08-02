import { Component, OnInit } from "@angular/core";
import { OrderServiceService } from "src/app/services/order-service.service";

@Component({
  selector: "app-order-service-create",
  templateUrl: "./order-service-create.component.html",
  styleUrls: ["./order-service-create.component.css"],
})
export class OrderServiceCreateComponent implements OnInit {
  constructor(private orderServiceService: OrderServiceService) {}

  ngOnInit(): void {
    this.orderServiceService.showMessage("Funcionando");
  }
}
