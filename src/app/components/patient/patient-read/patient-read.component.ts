import { Patient } from "./../../../models/patient.model";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { OnChanges } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { PatientService } from "src/app/services/patient.service";

@Component({
  selector: "app-patient-read",
  templateUrl: "./patient-read.component.html",
  styleUrls: ["./patient-read.component.css"],
})
export class PatientReadComponent implements OnInit {
  patients: Patient[] = [];

  patientSelected!: Patient;

  @Output() patient = new EventEmitter();

  constructor(private patientService: PatientService) {
    this.patientService.read().subscribe((patients) => {
      this.patients = patients;
    });
  }

  ngOnInit(): void {}

  selectPatient(patient: Patient) {
    this.patient.emit(patient);
  }
}
