import { OrderServiceExam } from './../../../models/orderserviceexam.model';
import { OrderService } from './../../../models/orderservice.model';
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

  orderService = <OrderService>{};
  orderServiceExam = <OrderServiceExam>{};

  constructor(
    private orderServiceService: OrderServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  navigateToListOrders(): void {
    this.router.navigate(["/order-service"]);
  }

  saveOrderService(): void {
    this.orderService.ordemServicoExame = this.orderServiceExam;
    console.log(this.orderService);
    this.orderServiceService.create(this.orderService).subscribe(() => {
      this.orderServiceService.showMessage("Produto criado");
      this.router.navigate(["/order-service"]);
    });
  }
  pacienteRecebido($event: Patient): void {
    this.orderService.paciente = $event;
  }
  postoRecebido($event: CollectionPost): void {
    this.orderService.postoColeta = $event;
  }
  medicoRecebido($event: Doctor): void {
    this.orderService.medico = $event;
  }
  examesSelecionados($event: Exam[]): void {
    var precoTotal = 0;
    for (var i = 0; i < $event.length; i++){
      precoTotal = precoTotal + $event[i].preco;
    }
    this.orderServiceExam.preco = precoTotal;
    this.orderServiceExam.exames = $event;
  }


}
