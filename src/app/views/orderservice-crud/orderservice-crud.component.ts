import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-orderservice-crud",
  templateUrl: "./orderservice-crud.component.html",
  styleUrls: ["./orderservice-crud.component.css"],
})
export class OrderserviceCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToOrderServiceCreate(): void {
    this.router.navigate(["/order-service/create"]);
  }
}
