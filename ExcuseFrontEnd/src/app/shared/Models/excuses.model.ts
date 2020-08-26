import { ExcuseType } from './excuseType.model';
export class Excuse {
    id?: number; 
    employee_Name: string; 
    employee_LastName: string;
    employee_Date: Date;
    excuseTypeId: number;
    excuseType?: ExcuseType;
}