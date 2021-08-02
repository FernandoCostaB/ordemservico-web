import { Patient } from "./../../../models/patiente.model";
import { Exam } from "./../../../models/exam.model";
import { Doctor } from "./../../../models/doctor.model";
import { CollectionPost } from "./../../../models/collectionpost.model";
import { PatientService } from "./../../../services/patient.service";
import { OrderServiceExamService } from "./../../../services/order-service-exam.service";
import { OrderServiceExam } from "./../../../models/orderserviceexam.model";
import { ExamService } from "./../../../services/exam.service";
import { DoctorService } from "./../../../services/doctor.service";
import { CollectionPostService } from "./../../../services/collection-post.service";
import { OrderService } from "./../../../models/orderservice.model";
import { Component, OnInit } from "@angular/core";
import { OrderServiceService } from "src/app/services/order-service.service";

@Component({
  selector: "app-order-service-read",
  templateUrl: "./order-service-read.component.html",
  styleUrls: ["./order-service-read.component.css"],
})
export class OrderServiceReadComponent implements OnInit {
  orderServices: OrderService[] = [];
  collectionsPosts: CollectionPost[] = [];
  doctors: Doctor[] = [];
  exams: Exam[] = [];
  orderServicesExams: OrderServiceExam[] = [];
  patients: Patient[] = [];

  displayedColumns = ["id", "paciente", "price"];

  constructor(
    private orderServiceService: OrderServiceService,
    private collectionPostService: CollectionPostService,
    private doctorService: DoctorService,
    private examService: ExamService,
    private orderServiceExamService: OrderServiceExamService,
    private patientService: PatientService
  ) {
    this.orderServiceService.read().subscribe((orderServices) => {
      this.orderServices = orderServices;
    });
    // this.orderServiceExamService.read().subscribe((orderServices) => {
    //   this.orderServicesExams = orderServices;
    //   console.log(orderServices);
    // });
    // this.patientService.read().subscribe((orderServices) => {
    //   this.patients = orderServices;
    //   console.log(orderServices);
    // });
    // this.examService.read().subscribe((orderServices) => {
    //   this.exams = orderServices;
    //   console.log(orderServices);
    // });
    // this.collectionPostService.read().subscribe((orderServices) => {
    //   this.collectionsPosts = orderServices;
    //   console.log(orderServices);
    // });

    // this.doctorService.read().subscribe((orderServices) => {
    //   this.doctors = orderServices;
    //   console.log(orderServices);
    // });
  }

  ngOnInit(): void {}
}
