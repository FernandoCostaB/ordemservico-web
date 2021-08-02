import { Doctor } from './../../../models/doctor.model';
import { CollectionPost } from './../../../models/collectionpost.model';
import { Patient } from "./../../../models/patient.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderServiceService } from "src/app/services/order-service.service";
import { Exam } from 'src/app/models/exam.model';

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
  pacienteRecebido($event: Patient): void {
    console.log($event);
  }
  postoRecebido($event: CollectionPost): void {
    console.log($event);
  }
  medicoRecebido($event: Doctor): void {
    console.log($event);
  }
  examesSelecionados($event: Exam[]): void {
    console.log($event);
  }
}
