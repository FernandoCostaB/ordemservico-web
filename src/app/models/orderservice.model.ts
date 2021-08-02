import { OrderServiceExam } from "./orderserviceexam.model";
import { Doctor } from "./doctor.model";
import { Patient } from "./patiente.model";
import { CollectionPost } from "./collectionpost.model";
export interface OrderService {
  id?: number;
  data: Date;
  convenio: String;
  paciente: Patient;
  postoColeta: CollectionPost;
  medico: Doctor;
  ordemServicoExame: OrderServiceExam;
}
