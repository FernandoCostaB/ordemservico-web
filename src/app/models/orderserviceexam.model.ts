import { Exam } from "./exam.model";
export interface OrderServiceExam {
  id?: number;
  preco: number;
  exames: Exam[];
}
