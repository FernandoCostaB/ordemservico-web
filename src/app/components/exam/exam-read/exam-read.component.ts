import { ExamService } from './../../../services/exam.service';
import { Exam } from './../../../models/exam.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-exam-read",
  templateUrl: "./exam-read.component.html",
  styleUrls: ["./exam-read.component.css"],
})
export class ExamReadComponent implements OnInit {
  exams: Exam[] = [];
  examSelected!: Exam;
  listExams: Exam[] = []
  @Output() exam = new EventEmitter();
  constructor(private examService: ExamService) {
    this.examService.read().subscribe((exams) => {
      this.exams = exams;
    });
  }

  ngOnInit(): void { }
  
  selectExam(exam: Exam) {
    if (this.listExams.indexOf(exam) > -1) {
      var index = this.listExams.indexOf(exam);
      this.listExams.splice(index, 1);
      
    } else {
      this.listExams.push(exam);
    }
    this.exam.emit(this.listExams);
  }
}
