import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderServiceCreateComponent } from "./components/order-service/order-service-create/order-service-create.component";
import { HomeComponent } from "./views/home/home.component";
import { OrderserviceCrudComponent } from "./views/orderservice-crud/orderservice-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "order-service",
    component: OrderserviceCrudComponent,
  },
  {
    path: "order-service/create",
    component: OrderServiceCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
