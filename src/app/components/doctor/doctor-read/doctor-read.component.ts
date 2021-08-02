import { DoctorService } from './../../../services/doctor.service';
import { Doctor } from './../../../models/doctor.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-doctor-read",
  templateUrl: "./doctor-read.component.html",
  styleUrls: ["./doctor-read.component.css"],
})
export class DoctorReadComponent implements OnInit {
  doctors: Doctor[] = [];

  doctorSelected!: Doctor;
  @Output() doctor = new EventEmitter();

  constructor(private doctorService: DoctorService) {
    this.doctorService.read().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  ngOnInit(): void {}

  selectDoctor(doctor: Doctor) {
    this.doctor.emit(doctor);
  }
}
